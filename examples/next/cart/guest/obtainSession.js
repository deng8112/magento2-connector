import {
  fetchCreateEmptyCart,
  normalizeCreateEmptyCart,
} from '../../../../cart/guest/createEmptyCart';

/**
 * Magento 2: guest obtainSession handler
 */
export default async function obtainSession(req, res) {
  const rawData = await fetchCreateEmptyCart();
  const guestCartId = normalizeCreateEmptyCart(rawData);
  return res.json({
    guestCartId,
  });
}
