export default function Home() {
  return (

<html>
  <head>
    <title>Help people out</title>
  </head>
  <body>
    <form action="/api/create-caring-session" method="POST">

      <input type="hidden" name="amount" value="25000" />
      <button class="btn" type="submit">Care for people</button>
    </form>
  </body>
</html>
  )
}