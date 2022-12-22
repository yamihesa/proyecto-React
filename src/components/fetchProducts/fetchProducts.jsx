export const fetchProducts = (prod) => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(prod)
        }, 2000);
    })
}