String email = '';

CamoTextField(
  value: email,
  onChanged: (value) => setState(() => email = value),
  label: 'Email',
  supportingText: 'We never share it',
  error: email.isNotEmpty && !email.contains('@') ? 'Enter a valid email' : null,
  keyboardType: TextInputType.emailAddress,
)
