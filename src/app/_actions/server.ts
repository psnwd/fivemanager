'use server'

import { db } from "@/db"
import { eq } from "drizzle-orm"
import { events, giveaway, news } from "drizzle/schema"

// News Actions
export async function getNews() {
    return await db.select().from(news).orderBy(news.id)
}

export async function saveNews(values: any) {
    console.log(values)

    db.insert(news).values({
        title: values.title,
        description: values.description,
        image: values.image,
        status: 1,
        lastEditBy: "",
        lastEditDate: "",
        createdBy: "",
        createdDate: new Date().toDateString()
    })
}

export async function updateNews(values: any) {
    console.log(values)

    db.update(news).set({
        title: values.title,
        description: values.description,
        image: values.image,
        status: 1,
        lastEditBy: "",
        lastEditDate: "",
        createdBy: "",
        createdDate: new Date().toDateString()
    }).where(eq(news.id, values.id))
}

export async function deleteNews(id: number) {
    console.log(id)

    db.delete(news).where(eq(news.id, id))
}

// Event Actions
export async function getEvents() {
    return await db.select().from(events).orderBy(events.id)
}

export async function saveEvents(values: any) {
    console.log(values)

    db.insert(events).values({
        title: values.title,
        description: values.description,
        image: values.image,
        status: 1,
        lastEditBy: "",
        lastEditDate: "",
        createdBy: "",
        createdDate: new Date().toDateString()
    })
}

export async function updateEvents(values: any) {
    console.log(values)

    db.update(events).set({
        title: values.title,
        description: values.description,
        image: values.image,
        status: 1,
        lastEditBy: "",
        lastEditDate: "",
        createdBy: "",
        createdDate: new Date().toDateString()
    }).where(eq(events.id, values.id))
}

export async function deleteEvents(values: any) {
    console.log(values)

    db.delete(events).where(eq(events.id, values.id))
}

// Giveaway Actions
export async function getGiveaways() {
    return await db.select().from(giveaway).orderBy(giveaway.id)
}

export async function saveGiveaway(values: any) {
    console.log(values)

    db.insert(giveaway).values({
        name: values.name,
        type: values.type,
        description: values.description,
        status: 1,
        items: values.items,
        image: values.image,
        totalKeys: values.totalKeys,
        remainingKeys: values.remainingKeys,
        endTime: values.endTime,
        lastEditBy: "",
        lastEditDate: "",
        createdBy: "",
        createdDate: new Date().toDateString()
    })
}

export async function updateGiveaway(values: any) {
    console.log(values)

    db.update(giveaway).set({
        name: values.name,
        type: values.type,
        description: values.description,
        status: 1,
        items: values.items,
        image: values.image,
        totalKeys: values.totalKeys,
        remainingKeys: values.remainingKeys,
        endTime: values.endTime,
        lastEditBy: "",
        lastEditDate: "",
        createdBy: "",
        createdDate: new Date().toDateString()
    }).where(eq(giveaway.id, values.id))
}

export async function deleteGiveaway(values: any) {
    console.log(values)

    db.delete(giveaway).where(eq(giveaway.id, values.id))
}
