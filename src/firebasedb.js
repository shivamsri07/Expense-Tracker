import app from "./firebase";

const collectionRef = app.firestore().collection("expenses")

export const create = (payload) => {
    return new Promise((resolve, reject) => {
        collectionRef
            .doc(payload.id)
        .set(payload)
        .then((res) => {
            resolve(payload);
        })
        .catch((err) => {
            reject(err)
        })
    })
}



export const list = () => {

    return new Promise((resolve, reject) => {
        const items = [];

        collectionRef.onSnapshot((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            resolve(items)
        })
    })

}



export const remove = (key) => {
    return new Promise((resolve, reject) => {
        collectionRef
            .doc(key)
            .delete()
            .then(() => {
                resolve(true)
            })
            .catch((err) => {
                reject(err)
            })
    })
}