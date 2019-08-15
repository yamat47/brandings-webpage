export default [
  route( "/",         "home"               ),
  route( "/roster",   "roster"             ),
  route( "/schedule", "schedule"           ),
  route( "/links",    "links"              ),
  route( "/history",  "history"            ),
  route( "/contact",  "contact"            ),
  route( "/join_us",  "join us", "join_us" ),
  route( "/blog",     "blog" ),
]

function route( path, name, _viewName ) {
  const viewName = _viewName || name;

  return { path, name, component: () => import( "@/views/" + viewName + ".vue" ) }
}
