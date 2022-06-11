const Header = () => {
  const hello: string = 'thanks'
  return (
    <section className="">
      <header className="text-3xl text-center py-2 text-yellow-400 bg-gray-600">
        {hello}
      </header>
    </section>
  )
}
export default Header
