
const cacheData = "iths"

this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cacheData)
        .then((cache) =>{
            cache.addAll([
                "/static/js/bundle.js",
                "/index.htm",
                "/",
                "/favicon.ico",
                "/clock",
                "/contry",
                "/weather"
            ])
        })
    )
})

this.addEventListener("fetch", (event)=> {
    if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request)
        .then((result =>{
            if(result)
            {
                return result
            }
             const requestUrl = event.request.clone()
             fetch(requestUrl)
        }))
    )
}
})