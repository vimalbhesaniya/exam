import React, { useCallback, useContext, useState } from 'react'
import { EnableSpinner } from '../..'
import firebase from 'firebase/compat/app'
import "firebase/compat/storage"

const useFirestorage = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [setSpinnerState, spinner] = useContext(EnableSpinner)
    // const Upload = useCallback((img, path, type) => {
    //     if (img) {
    //         const storageRef = firebase.storage().ref(path)
    //         const fileRef = storageRef.child(img)
    //         const metadata = {
    //             contentType: type,
    //         };
    //         setSpinnerState(true)
    //         fileRef.put(img, metadata)
    //             .then((snapshot) => {
    //                 snapshot.ref.getDownloadURL()
    //                     .then((downloadUrl) => {
    //                         if (downloadUrl) {
    //                             setImageUrl(downloadUrl)
    //                             setSpinnerState(false);
    //                             return downloadUrl
    //                         }
    //                     })
    //             })
    //     }
    // }, []);
    const Upload = useCallback((img) => {
        if (img) {
            const storageRef = firebase.storage().ref('/Files');
            const fileRef = storageRef.child(Date.now() + "_" + `${img}`)
            setSpinnerState(true)

            fileRef.put(img).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);
                    setImageUrl(downloadURL);
                    setSpinnerState(false);
                })
            });
        }
    });

    const handleDelete = useCallback((fileName, path) => {
        const storageRef = firebase.storage().ref(path);
        const fileRef = storageRef.child(fileName);
        fileRef.delete().then(() => {
            console.log('File deleted successfully');
        }).catch((error) => {
            console.error('Error deleting file: ', error);
        });
    }, []);



    return { imageUrl, Upload, handleDelete }
}

export default useFirestorage