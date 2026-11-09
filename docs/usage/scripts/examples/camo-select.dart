String? country;

CamoSelect<String>(
  value: country,
  onChanged: (value) => setState(() => country = value),
  options: const [
    SelectOption('id', 'Indonesia'),
    SelectOption('nl', 'Netherlands'),
    SelectOption('us', 'United States'),
  ],
  label: 'Country',
  placeholder: 'Choose one',
  searchable: true,
)
