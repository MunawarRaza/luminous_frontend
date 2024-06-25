import formatPhoneNumber from './format-phone'

describe('formatPhone', () => {
  it('should return formatted phone number', () => {
    const phone = '1234567890'
    const formattedPhone = formatPhoneNumber(phone)

    expect(formattedPhone).toEqual('(123) 456-7890')
  })

  it('should return empty string if phone number is empty', () => {
    const phone = ''
    const formattedPhone = formatPhoneNumber(phone)

    expect(formattedPhone).toEqual('')
  })

  it('should only return 10 digits even if the input has more than 10 digits', () => {
    const phone = '12345678901234567890'
    const formattedPhone = formatPhoneNumber(phone)

    expect(formattedPhone).toEqual('(123) 456-7890')
  })

  it('should not accept non-numeric characters', () => {
    const phone = '1234567890abc'
    const formattedPhone = formatPhoneNumber(phone)

    expect(formattedPhone).toEqual('(123) 456-7890')
  })
})
