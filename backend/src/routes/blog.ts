import { Hono } from "hono";

export const blogRouter = new Hono();

app.use("api/v1/blog/*", async (c, next) =>{
    const header = c.req.header("authorization") || "";
  
    const token = header.split(" ")[1];
  
    const response = await verify(header, c.env.JWT_SECRET);
    if(response.id) {
      next()
    } else {
      c.status(403)
      return c.json({error: "unauthorized"})
    }
  })
  
  
  
  app.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
  })
  
  app.put('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')
  })
  
  app.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!')
  })