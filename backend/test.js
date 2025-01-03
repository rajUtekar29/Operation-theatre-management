const bcrypt = require('bcrypt');

(async () => {
  try {
    // Define a plain text password
    const plainTextPassword = 'test123';

    // Hash the password
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
    console.log('Generated Hashed Password:', hashedPassword);

    // Compare the plain text password with the hash
    const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
    console.log('Password Match:', isMatch); // Should print "true"

    // Test with an incorrect password
    const isWrongMatch = await bcrypt.compare('wrongpassword', hashedPassword);
    console.log('Wrong Password Match:', isWrongMatch); // Should print "false"
  } catch (err) {
    console.error('Error testing bcrypt.compare:', err);
  }
})();
