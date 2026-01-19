package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// 2. Map your pages to routes
	r.Get("/eventos", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./frontend/assets/pages/eventos.html")
	})

	r.Route("/frontend/assets", func(r chi.Router) {
		fs := http.StripPrefix("/frontend/assets", http.FileServer(http.Dir("./frontend/assets")))
		r.Get("/*", func(w http.ResponseWriter, r *http.Request) {
			fs.ServeHTTP(w, r)
		})
	})

	println("Server listening on :8080")
	http.ListenAndServe(":8080", r)
}
