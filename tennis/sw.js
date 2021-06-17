self.addEventListener("install", e=> {
    e.waitUntil(
        chaces.open("static").then(cache=>
            {
                return cache.addAll(["./index.html","./AΓΩΝΕΣ.html","./ΑΡΧΙΚΗ.html","./ΒΑΘΜΟΛΟΓΙΑ.html","./ΕΠΙΚΟΙΝΩΝΙΑ.html",
                ,"/Tennis.png","/tsitsipas.jpg","./style.css","./icon.png"])
            })
    );
        });

       
        self.addEventListener("fetch",e =>
{
    e.respondWith(
        caches.match(e.request).then( response =>
            {
                return response || fetch(e.request);
            })
        
    );
    
});