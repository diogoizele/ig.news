import { signIn, useSession } from "next-auth/react";

import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data } = useSession();

  async function handleSubscribe() {
    if (!data) {
      signIn("github");
      return;
    }

    // criação da checkout session
    // https://stripe.com/docs/api/checkout/sessions

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;
      console.log(response);

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
