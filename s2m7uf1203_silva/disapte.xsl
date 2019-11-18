<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title></title>
        <link href="primavera.css" rel="stylesheet" type="text/css"/>
      </head>
      <body>
        <h1>Primavera Sound</h1>
        <ul id="menu">
          <li><a href="index.xml">Home</a></li>
          <li><a href="dimecres.xml">Miércoles</a></li>
          <li><a href="dijous.xml">Jueves</a></li>
          <li><a href="divendres.xml">Viernes</a></li>
          <li><a href="disapte.xml">Sábado</a></li>
        </ul>
        <ul id="lateral">
          <xsl:for-each select="primavera/grup">

            <xsl:if test="Dia='sábado 30 de mayo'">
            <li><a href="#{id}"><xsl:value-of select="Artista"/></a></li>
          </xsl:if>
          </xsl:for-each>
        </ul>
      <div id="contingut">
      <xsl:for-each select="primavera/grup">
        <a href="{id}.xml">
          <xsl:if test="Dia='sábado 30 de mayo'">
        <div id="grup" style="background-image:url({image}); background-size: cover;
        background-repeat: no-repeat;">
            <div id="text" style="background-color: rgba(231, 95, 95, 0.5)">
              <h2 id="{id}"><xsl:value-of select="Artista"/></h2>
              <h3><xsl:value-of select="Dia"/></h3>
              <h3><xsl:value-of select="Lloc"/></h3>
              <h3><xsl:value-of select="Titol"/></h3>
              <h3><xsl:value-of select="Disc"/></h3>
              <h4><xsl:value-of select="Web"/></h4>
            </div>
        </div>
      </xsl:if>
    </a>
      </xsl:for-each>
    </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
