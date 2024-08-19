import {fetch} from "undici";


const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDgwMjE4YjhlYzEyMjk0MDliYWY2NTE5NjY4NzdlYiIsIm5iZiI6MTcyMzY2MzIwOS45MjM1MzgsInN1YiI6IjY2YmIzYjI2ODA5MmRhODE1ODFhZjZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y-uDjl0a_h_vYRR3qpJyNLNwC-arMqngPGO1ghJW2vo"
export async function fetchWithAuth(url:string,options : RequestInit={}) {
    const headers = new Headers(options.headers)
    headers.set("Authorization", `Bearer ${token}`)
    const response = await fetch(url,{ ...options, headers})
    return response
}
