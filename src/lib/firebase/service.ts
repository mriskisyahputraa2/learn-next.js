import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

// service data product and book
export async function retrieveData(colectionName: string) {
  const snapshot = await getDocs(collection(firestore, colectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

// service data product and book by id
export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id)); // getDoc, mengambil data berdasarkan ID
  const data = snapshot.data();
  return data;
}

// service regiseter
export async function register(data: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) {
  const userQuery = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(userQuery); // getDocs, mengambil data berdasarkan query

  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return { status: false, statusCode: 400, message: "Email already exists" };
  } else {
    data.role = "member";
    data.password = await bcrypt.hash(data.password, 10);

    try {
      await addDoc(collection(firestore, "users"), data);
      return {
        status: true,
        statusCode: 200,
        message: "Register successfully",
      };
    } catch (error) {
      return {
        status: false,
        error,
        statusCode: 400,
        message: "Register failed",
      };
    }
  }
}

// service login
export async function login(data: { email: string }) {
  const userQuery = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(userQuery);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}

// service login with google cloud
export async function loginWithGoogle(data: any, callback: any) {
  const userQuery = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(userQuery);
  const user: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // validasi, jika panjang user lebih dari 0
  if (user.length > 0) {
    data.role = user[0].role; // sesuaikan role user

    // update data user berdasarkan Id user
    await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {
      callback({ staus: true, data: data });
    });

    // kalo tidak
  } else {
    data.role = "member"; // default role user adalah "member"

    // tambahkan data user
    await addDoc(collection(firestore, "users"), data).then(() => {
      callback({ staus: true, data: data });
    });
  }
}
