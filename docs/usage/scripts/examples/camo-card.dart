CamoCard(
  onPressed: openProject,
  child: Padding(
    padding: EdgeInsets.all(Camouflage.themeOf(context).spacing.l),
    child: const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [CamoText('Camouflage'), CamoText('Updated 2 hours ago')],
    ),
  ),
)
