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

const websiteName = process.env.NEXT_PUBLIC_APP_NAME;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
// tattoo list
async function getTattoos() {
  const docRef = doc(db, websiteName, "tattoos");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addTattoo(tattooData) {
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
async function deleteTattoo(tattooData) {
  const docRef = doc(db, websiteName, "tattoos");
  await updateDoc(docRef, {
    tattoos: arrayRemove(tattooData),
  });
}
async function updateTattoo(tattooId, updatedTattoo) {
  const docRef = doc(db, websiteName, "tattoos");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const tattoos = docSnap.data().tattoos;
    const tattooIndex = tattoos.findIndex((tattoo) => tattoo.id === tattooId);
    if (tattooIndex !== -1) {
      tattoos[tattooIndex] = updatedTattoo;
      await updateDoc(docRef, { tattoos });
    }
  }
}
// shop products
async function getImages() {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addImage(imageData) {
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
async function deleteImage(imageData) {
  const docRef = doc(db, websiteName, "products");
  await updateDoc(docRef, {
    products: arrayRemove(imageData),
  });
}
// blog
async function getBlogPosts() {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addBlogPost(post) {
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
async function updateBlogPost(postId, updatedPost) {
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
async function getExhibitions() {
  const docRef = doc(db, websiteName, "exhibitions");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addExhibition(exhibition) {
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
async function getOrders() {
  const docRef = doc(db, websiteName, "orders");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addOrder(order) {
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
async function updateOrder(orderId, updatedOrder) {
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
  updateTattoo,
};
