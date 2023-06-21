import Stripe from 'stripe'
import {STRIPE_PRIVATE_KEY, DOMAIN} from "../config.js"
const stripe = new Stripe(STRIPE_PRIVATE_KEY, {
    apiVersion: '2022-11-15',
});

export const createSession = async (req, res) => {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            unit_amount: 200000, // $2000.00
                            product_data: {
                                name: 'Laptop',
                                description: 'Gaming Laptop',
                            }
                        },
                        quantity: 1,
                    },
                    {
                        price_data: {
                            currency: 'usd',
                            unit_amount: 30000, // $300.00
                            product_data: {
                                name: 'TV',
                                description: 'Smart TV',
                            }
                        },
                        quantity: 1,
                    }
                ],
                mode: 'payment',
                success_url: `${DOMAIN}/success`,
                cancel_url: `${DOMAIN}/cancel`,
            })

            return res.json({ url: session.url });
        } catch
            (error) {
            return res.status(500).json({message: error.message});
        }
    }
;