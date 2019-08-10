export default [
  route( "/",      "home" ),
  route( "/about", "about" )
]

function route( path, name ) {
  return { path, name, component: () => import( "@/views/" + name + ".vue" ) }
}
