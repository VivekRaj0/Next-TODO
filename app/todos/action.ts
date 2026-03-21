"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createTodo(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const dueDate = String(formData.get("dueDate") ?? "").trim();
  if (!title || !dueDate) return;

  await prisma.todo.create({
    data: { title, dueDate, ownerId: 1 },
  });

  revalidatePath("/todos");
}
