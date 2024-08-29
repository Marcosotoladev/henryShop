
export const validateName = (name: string): boolean => /^[a-zA-Z\s]{2,30}$/.test(name);
export const validateEmail = (email: string): boolean => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
export const validatePassword = (password: string): boolean => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
export const validateAddress = (address: string): boolean => address.length >= 5;
export const validatePhone = (phone: string): boolean => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);