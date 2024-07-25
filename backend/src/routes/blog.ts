import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@thecurioussailor/medium-common";
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) =>{
    const authHeader = c.req.header("authorization") || "";
  
    const token = authHeader.split(" ")[1];
  
    try{
        const user = await verify(token, c.env.JWT_SECRET);
        if(user) {
            c.set("userId", user.id as string) // ensures user.id as string
        await next()
        } else {
        c.status(403)
        return c.json({error: "You are not logged in"})
        }
    } catch(e) {
        c.status(403)
        return c.json({error: "You are not logged in"})
    }
    
})
  
blogRouter.post('/',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body = await c.req.json();
      const { success } = createBlogInput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        })
      }
      const autherId = c.get("userId");
      try{
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: autherId
            }
          })
        return c.json({
            id: blog.id,
        })
      }catch(e){
        c.status(411);
        return c.json({
            msg: "Blog not posted. Try again!"
        })
      }
      
})
  
blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        })
      }
    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content
        }
    })
  return c.json({
    id: blog.id
  })
})

//Todo: Pagination
//Tod0: Zod validation
//Todo: Hashed Password 
blogRouter.get("/bulk", async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany();

    return c.json({
        blogs
    })
})

blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const id = c.req.param("id");
      try{
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }
          })
        return c.json({
            blog
        })
      }catch(e){
        c.status(411);
        return c.json({
            message: "Error while fetching the blog"
        })
      }
})

