import { default as flattenObject } from './flattenObject';

describe('flattenObject', () => {
  it('should be able to flatten object', () => {
    const translations = {
      header: {
        tagline: {
          kiniseko: '[Ki Niseko] Stay. Play. Experience.',
          nisekocentral: '[Niseko Central] Stay. Play. Experience.'
        }
      },
      payment: {
        veritrans: {
          Q001: 'Something was wrong with the credit card details: {message}',
          Q002: 'Invalid credit card details. {message}',
          Q099: 'Error occurred on the payment service provide. Please wait a while and try again. If the problem persist, please contact us.'
        }
      }
    }
    const EXPECTED_FLATTENED = {
      'header.tagline.kiniseko': '[Ki Niseko] Stay. Play. Experience.',
      'header.tagline.nisekocentral': '[Niseko Central] Stay. Play. Experience.',
      'payment.veritrans.Q001': 'Something was wrong with the credit card details: {message}',
      'payment.veritrans.Q002': 'Invalid credit card details. {message}',
      'payment.veritrans.Q099': 'Error occurred on the payment service provide. Please wait a while and try again. If the problem persist, please contact us.'
    };

    let result = flattenObject(translations);
    expect(result).toEqual(EXPECTED_FLATTENED);
  });
});
