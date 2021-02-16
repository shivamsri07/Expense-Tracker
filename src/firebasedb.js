import app from "./firebase";


export const create = (payload) => {
    const collectionRef = app.firestore().collection("expenses")

    return new Promise((resolve, reject) => {
        collectionRef
        .doc(payload.uid)
        .collection("expense")
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



export const list = (uid) => {
    const collectionRef = app.firestore().collection("expenses")
    return new Promise((resolve, reject) => {
        const items = [];

        collectionRef
        .doc(uid)
        .collection("expense")
        .onSnapshot((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            resolve(items)
        })
    })

}



export const remove = (key, uid) => {
    const collectionRef = app.firestore().collection("expenses")
    return new Promise((resolve, reject) => {
        collectionRef
        .doc(uid)
        .collection("expense")
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