import axios from "axios";
import { Subscription } from "../models/subscription";
const subscriberClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export async function getAllSubscriptions(id: number): Promise<Subscription[]> {
  const response = await subscriberClient.get("/subscribee" + id);
  return response.data.map((subscriptionObj: any) => {
    const {
      subscription_id,
      subscriber,
      subscribee,
      blocked,
    } = subscriptionObj;
    return new Subscription(subscription_id, subscriber, subscribee, blocked);
  });
}

export async function getAllSubscribees(id: number): Promise<Subscription[]> {
  const response = await subscriberClient.get("/subscribee" + id);
  return response.data.map((subscriptionObj: any) => {
    const {
      subscription_id,
      subscriber,
      subscribee,
      blocked,
    } = subscriptionObj;
    return new Subscription(subscription_id, subscriber, subscribee, blocked);
  });
}

export async function createSubscriptions(
  uid: number,
  s: Subscription
): Promise<Subscription> {
  const response = await subscriberClient.post("/subscribee" + uid, {
    subscription_id: 0,
    subscriber: s.subscriber,
    subscribee: s.subscribee,
    blocked: s.blocked,
  });

  const { subscription_id, subscriber, subscribee, blocked } = response.data;
  return new Subscription(subscription_id, subscriber, subscribee, blocked);
}

export async function DeleteSubscriptions(
  uid: number,
  s: Subscription
): Promise<Subscription> {
  const response = await subscriberClient.post("/subscribee" + uid, {
    subscription_id: s.subscriptionId,
    //   subscriber: s.subscriber,
    //   subscribee: s.subscribee,
    //   blocked: s.blocked,
  });
  const { subscription_id, subscriber, subscribee, blocked } = response.data;
  return new Subscription(subscription_id, subscriber, subscribee, blocked);
}