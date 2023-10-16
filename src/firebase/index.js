import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
// tattoo list
async function getTattoos(websiteName) {
  const docRef = doc(db, websiteName, "tattoos");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addTattoo(websiteName, tattooData) {
  const docRef = doc(db, websiteName, "tattoos");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "tattoos"), { tattoos: [tattooData] });
  } else {
    await updateDoc(doc(db, websiteName, "tattoos"), {
      tattoos: arrayUnion(tattooData),
    });
  }
}
async function deleteTattoo(websiteName, tattooData) {
  const docRef = doc(db, websiteName, "tattoos");
  await updateDoc(docRef, {
    tattoos: arrayRemove(tattooData),
  });
}
// shop products
async function getImages(websiteName) {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addImage(websiteName, imageData) {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "products"), { products: [imageData] });
  } else {
    await updateDoc(doc(db, websiteName, "products"), {
      products: arrayUnion(imageData),
    });
  }
}
async function deleteImage(websiteName, imageData) {
  const docRef = doc(db, websiteName, "products");
  await updateDoc(docRef, {
    products: arrayRemove(imageData),
  });
}
// blog
async function getBlogPosts(websiteName) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addBlogPost(websiteName, post) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "blog"), { posts: [post] });
  } else {
    await updateDoc(doc(db, websiteName, "blog"), {
      posts: arrayUnion(post),
    });
  }
}
async function updateBlogPost(websiteName, postId, updatedPost) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const posts = docSnap.data().posts;
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      posts[postIndex] = updatedPost;
      await updateDoc(docRef, { posts });
    }
  }
}
// exhibitions
async function getExhibitions(websiteName) {
  const docRef = doc(db, websiteName, "exhibitions");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addExhibition(websiteName, exhibition) {
  const docRef = doc(db, websiteName, "exhibitions");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "exhibitions"), {
      exhibitions: [exhibition],
    });
  } else {
    await updateDoc(doc(db, websiteName, "exhibitions"), {
      exhibitions: arrayUnion(exhibition),
    });
  }
}
// orders
async function getOrders(websiteName) {
  const docRef = doc(db, websiteName, "orders");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addOrder(websiteName, order) {
  const docRef = doc(db, websiteName, "orders");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "orders"), { orders: [order] });
  } else {
    await updateDoc(doc(db, websiteName, "orders"), {
      orders: arrayUnion(order),
    });
  }
}
async function updateOrder(websiteName, orderId, updatedOrder) {
  const docRef = doc(db, websiteName, "orders");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const orders = docSnap.data().orders;
    const orderIndex = orders.findIndex((order) => order.id === orderId);
    if (orderIndex !== -1) {
      orders[orderIndex] = updatedOrder;
      await updateDoc(docRef, { orders });
    }
  }
}
export {
  getImages,
  addImage,
  deleteImage,
  storage,
  auth,
  getBlogPosts,
  addBlogPost,
  getExhibitions,
  addExhibition,
  updateBlogPost,
  getOrders,
  addOrder,
  updateOrder,
  getTattoos,
  addTattoo,
  deleteTattoo,
};
