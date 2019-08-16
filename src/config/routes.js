export default [
  route( "/",         "home"               ),
  route( "/roster",   "roster"             ),
  route( "/join_us",  "join us !", "join_us" ),
  route( "/schedule", "schedule"           ),
  route( "/history",  "history"            ),
  route( "/contact",  "contact"            ),
  route( "/blog",     "blog"               ),
  route( "/links",    "links"              ),
]

function route( path, name, _viewName ) {
  const viewName = _viewName || name;

  return { path, name, component: () => import( "@/views/" + viewName + ".vue" ) }
}
