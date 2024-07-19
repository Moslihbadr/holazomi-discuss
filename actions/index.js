"use server";

import * as auth from "@/auth";

export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}

export async function createTopic() {
  // revalidate path for home page 
};

export async function createPost() {
  // revalidate path for show topic page
};

export async function createComment() {
  // revalidate path for show post page
};

