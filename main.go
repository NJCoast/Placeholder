package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("assets/js/"))))
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("assets/css/"))))
	http.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("assets/images/"))))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "assets/index.html")
	})

	http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "assets/about.html")
	})

	log.Fatal(http.ListenAndServe(":8081", nil))
}
