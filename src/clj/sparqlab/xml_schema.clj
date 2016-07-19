(ns sparqlab.xml-schema
  "XML Schema 1.1 built-in datatypes <http://www.w3.org/TR/xmlschema-2/#built-in-datatypes>")

(derive ::boolean ::string)
(derive ::base64binary ::string)
(derive ::hexBinary ::string)
(derive ::float ::string)
(derive ::decimal ::string)
(derive ::double ::string)
(derive ::anyURI ::string)
(derive ::QName ::string)
(derive ::NOTATION ::string)
(derive ::duration ::string)
(derive ::dateTime ::string)
(derive ::time ::string)
(derive ::date ::string)
(derive ::gYearMonth ::string)
(derive ::gYear ::string)
(derive ::gMonthDay ::string)
(derive ::gDay ::string)
(derive ::gMonth ::string)
(derive ::normalizedString ::string)
(derive ::token ::normalizedString)
(derive ::language ::token)
(derive ::Name ::token)
(derive ::NMToken ::token)
(derive ::NCName ::Name)
(derive ::ID ::NCName)
(derive ::IDREF ::NCName)
(derive ::ENTITY ::NCName)
(derive ::integer ::decimal)
(derive ::nonPositiveInteger ::integer)
(derive ::long ::integer)
(derive ::nonNegativeInteger ::integer)
(derive ::negativeInteger ::nonPositiveInteger)
(derive ::int ::long)
(derive ::short ::int)
(derive ::byte ::short)
(derive ::unsignedLong ::nonNegativeInteger)
(derive ::positiveInteger ::nonNegativeInteger)
(derive ::unsignedInt ::unsignedLong)
(derive ::unsignedShort ::unsignedInt)
(derive ::unsignedByte ::unsignedShort)
