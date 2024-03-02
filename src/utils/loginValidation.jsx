export const validateLogin = (formData) => {
    const errors = {};
    if (!formData.email || !formData.password) {
      errors.all = 'Email and password are required.';
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email format.';
      }
      if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.';
      }
    }
    return errors;
  };
  