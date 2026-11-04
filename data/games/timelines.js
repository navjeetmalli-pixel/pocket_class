// Dated events for the timeline game, one list per chapter. Facts only from the chapter's own notes, checked against standard history.
// year is a number (BCE negative); `when` is an optional display text for approximate or ranged dates.
StudyData.addTimelines([
  { cls: 6, subject: "sstpb", chapter: "mauryas-and-shungas", events: [
      { year: -321, label: "Chandragupta Maurya founds the Mauryan Empire", when: "c. 321 BCE" },
      { year: -268, label: "Ashoka becomes emperor", when: "c. 268 BCE" },
      { year: -261, label: "Kalinga war", when: "c. 261 BCE" },
      { year: -232, label: "Ashoka's reign ends", when: "c. 232 BCE" },
      { year: -185, label: "Pushyamitra Shunga ends Mauryan rule", when: "c. 185 BCE" }
  ]},
  { cls: 6, subject: "sstpb", chapter: "gupta-empire", events: [
      { year: 320, label: "Chandragupta I begins the Gupta Empire", when: "c. 320 CE" },
      { year: 335, label: "Samudragupta becomes king", when: "c. 335 CE" },
      { year: 375, label: "Chandragupta II (Vikramaditya) becomes king", when: "c. 375 CE" },
      { year: 476, label: "Aryabhata is born" },
      { year: 550, label: "Hun attacks weaken the Gupta Empire", when: "c. 550 CE" }
  ]},
  { cls: 7, subject: "sstpb", chapter: "delhi-sultanate", events: [
      { year: 1206, label: "Qutbuddin Aibak founds the Mamluk dynasty" },
      { year: 1236, label: "Razia Sultan begins to rule" },
      { year: 1296, label: "Alauddin Khalji begins to rule" },
      { year: 1325, label: "Muhammad bin Tughlaq begins to rule" },
      { year: 1398, label: "Timur invades Delhi" },
      { year: 1526, label: "First Battle of Panipat ends the Sultanate" }
  ]},
  { cls: 7, subject: "sstpb", chapter: "mughal-empire", events: [
      { year: 1526, label: "Babur wins the First Battle of Panipat" },
      { year: 1540, label: "Sher Shah Suri takes the throne from Humayun" },
      { year: 1555, label: "Humayun regains the throne" },
      { year: 1556, label: "Akbar becomes emperor" },
      { year: 1605, label: "Jahangir begins to rule" },
      { year: 1628, label: "Shah Jahan begins to rule" },
      { year: 1658, label: "Aurangzeb begins to rule" },
      { year: 1707, label: "Aurangzeb dies" },
      { year: 1739, label: "Nadir Shah invades Delhi" }
  ]},
  { cls: 7, subject: "sstpb", chapter: "india-18th-century", events: [
      { year: 1707, label: "Aurangzeb dies; Mughal power declines" },
      { year: 1739, label: "Nadir Shah attacks Delhi" },
      { year: 1757, label: "Battle of Plassey" },
      { year: 1761, label: "Third Battle of Panipat" },
      { year: 1764, label: "Battle of Buxar" },
      { year: 1799, label: "Ranjit Singh captures Lahore" }
  ]},
  { cls: 8, subject: "sst", chapter: "reshaping-indias-political-map", events: [
      { year: 1206, label: "Delhi Sultanate begins (Qutb-ud-din Aibak)" },
      { year: 1336, label: "Vijayanagara Empire founded" },
      { year: 1347, label: "Bahmani kingdom founded" },
      { year: 1526, label: "First Battle of Panipat; Mughal rule begins" },
      { year: 1556, label: "Akbar becomes emperor" },
      { year: 1565, label: "Battle of Talikota" }
  ]},
  { cls: 8, subject: "sst", chapter: "the-rise-of-the-marathas", events: [
      { year: 1630, label: "Shivaji is born" },
      { year: 1674, label: "Shivaji crowned Chhatrapati at Raigad" },
      { year: 1680, label: "Death of Shivaji" },
      { year: 1689, label: "Sambhaji executed by Aurangzeb" },
      { year: 1761, label: "Third Battle of Panipat" }
  ]},
  { cls: 8, subject: "sst", chapter: "the-colonial-era-in-india", events: [
      { year: 1757, label: "Battle of Plassey" },
      { year: 1764, label: "Battle of Buxar" },
      { year: 1765, label: "Company gets the Diwani of Bengal, Bihar and Orissa" },
      { year: 1793, label: "Permanent Settlement" },
      { year: 1799, label: "Tipu Sultan killed at Seringapatam" },
      { year: 1835, label: "Macaulay's Minute on English education" },
      { year: 1853, label: "First railway, Bombay to Thane" },
      { year: 1857, label: "Revolt of 1857" },
      { year: 1858, label: "British Crown takes over from the Company" }
  ]},
  { cls: 8, subject: "sst", chapter: "indias-long-road-to-independence", events: [
      { year: 1885, label: "Indian National Congress founded" },
      { year: 1905, label: "Partition of Bengal; Swadeshi movement" },
      { year: 1906, label: "Muslim League formed" },
      { year: 1915, label: "Gandhi returns to India" },
      { year: 1919, label: "Jallianwala Bagh massacre" },
      { year: 1922, label: "Chauri Chaura; Non-Cooperation called off" },
      { year: 1929, label: "Congress demands Purna Swaraj at Lahore" },
      { year: 1930, label: "Dandi March; Civil Disobedience begins" },
      { year: 1942, label: "Quit India Movement" },
      { year: 1947, label: "India becomes independent" },
      { year: 1950, label: "Constitution comes into force" }
  ]},
  { cls: 8, subject: "sstpb", chapter: "east-india-company", events: [
      { year: 1600, label: "East India Company gets its royal charter" },
      { year: 1757, label: "Battle of Plassey" },
      { year: 1764, label: "Battle of Buxar" },
      { year: 1765, label: "Company gets the diwani of Bengal" },
      { year: 1849, label: "Punjab annexed after the Anglo-Sikh wars" }
  ]},
  { cls: 8, subject: "sstpb", chapter: "national-movement-1885-1919", events: [
      { year: 1885, label: "Indian National Congress founded" },
      { year: 1905, label: "Partition of Bengal" },
      { year: 1906, label: "Muslim League founded" },
      { year: 1911, label: "Partition of Bengal cancelled" },
      { year: 1915, label: "Gandhi returns from South Africa" },
      { year: 1916, label: "Home Rule Leagues started" },
      { year: 1917, label: "Champaran satyagraha" }
  ]},
  { cls: 8, subject: "sstpb", chapter: "struggle-for-independence-1919-1947", events: [
      { year: 1919, label: "Rowlatt Act; Jallianwala Bagh massacre" },
      { year: 1920, label: "Non-Cooperation Movement begins" },
      { year: 1922, label: "Chauri Chaura; movement called off" },
      { year: 1929, label: "Lahore Congress demands Purna Swaraj" },
      { year: 1930, label: "Dandi March; Civil Disobedience Movement" },
      { year: 1935, label: "Government of India Act" },
      { year: 1937, label: "Congress ministries formed" },
      { year: 1942, label: "Quit India Movement" },
      { year: 1947, label: "Independence and Partition" }
  ]},
  { cls: 8, subject: "sstpb", chapter: "india-after-independence", events: [
      { year: 1949, label: "Constitution adopted" },
      { year: 1950, label: "Constitution comes into force; India a republic" },
      { year: 1951, label: "First Five Year Plan begins" },
      { year: 1956, label: "States Reorganisation Act" },
      { year: 1966, label: "Haryana formed from Punjab" }
  ]},
  { cls: 9, subject: "sst", chapter: "resistance-and-resilience-1000-1700-ce", events: [
      { year: 1001, label: "Mahmud of Ghazni begins his raids" },
      { year: 1178, label: "Naiki Devi defeats Muhammad Ghuri at Kasahrada" },
      { year: 1192, label: "Muhammad Ghuri defeats Prithviraj Chauhan" },
      { year: 1206, label: "Delhi Sultanate established" },
      { year: 1336, label: "Vijayanagara established" },
      { year: 1526, label: "First Battle of Panipat" },
      { year: 1527, label: "Battle of Khanua" },
      { year: 1576, label: "Battle of Haldighati" },
      { year: 1671, label: "Battle of Saraighat" },
      { year: 1674, label: "Shivaji crowned sovereign Maratha ruler" }
  ]},
  { cls: 9, subject: "sstpb", chapter: "hist-french-revolution", events: [
      { year: 1789, label: "Estates-General meets; the Bastille is stormed" },
      { year: 1791, label: "France becomes a constitutional monarchy" },
      { year: 1792, label: "France becomes a republic" },
      { year: 1793, label: "Louis XVI is executed" },
      { year: 1799, label: "Napoleon Bonaparte comes to power" }
  ]},
  { cls: 9, subject: "sstpb", chapter: "civ-constitutional-design", events: [
      { year: 1946, label: "Constituent Assembly formed" },
      { year: 1949, label: "Constitution adopted" },
      { year: 1950, label: "Constitution comes into force" },
      { year: 1973, label: "Kesavananda Bharati case" },
      { year: 1976, label: "Fundamental Duties added (42nd Amendment)" }
  ]},
  { cls: 10, subject: "sst", chapter: "rise-of-nationalism-in-europe", events: [
      { year: 1789, label: "French Revolution" },
      { year: 1804, label: "Napoleonic Civil Code" },
      { year: 1815, label: "Congress of Vienna" },
      { year: 1821, label: "Greek struggle for independence begins" },
      { year: 1830, label: "July Revolution in France" },
      { year: 1832, label: "Treaty of Constantinople recognises Greece" },
      { year: 1834, label: "Zollverein formed under Prussia" },
      { year: 1848, label: "Revolutions across Europe; Frankfurt Parliament" },
      { year: 1859, label: "Sardinia-Piedmont defeats Austria" },
      { year: 1861, label: "Victor Emmanuel II king of united Italy" },
      { year: 1871, label: "William I proclaimed German Emperor" },
      { year: 1914, label: "First World War begins" }
  ]},
  { cls: 10, subject: "sst", chapter: "nationalism-in-india", events: [
      { year: 1909, label: "Gandhi writes Hind Swaraj" },
      { year: 1915, label: "Gandhi returns from South Africa" },
      { year: 1917, label: "Kheda Satyagraha" },
      { year: 1919, label: "Rowlatt Act; Jallianwala Bagh massacre" },
      { year: 1920, label: "Nagpur session adopts Non-Cooperation" },
      { year: 1922, label: "Chauri Chaura; Non-Cooperation withdrawn" },
      { year: 1928, label: "Simon Commission arrives" },
      { year: 1929, label: "Lahore Congress demands Purna Swaraj" },
      { year: 1930, label: "Salt law broken at Dandi" },
      { year: 1931, label: "Gandhi-Irwin Pact" },
      { year: 1932, label: "Poona Pact" }
  ]},
  { cls: 10, subject: "sst", chapter: "making-of-a-global-world", events: [
      { year: 1885, label: "Berlin Conference divides Africa" },
      { year: 1892, label: "Rinderpest reaches Africa's Atlantic coast" },
      { year: 1914, label: "First World War begins" },
      { year: 1921, label: "Indentured labour migration abolished" },
      { year: 1929, label: "Great Depression begins" },
      { year: 1939, label: "Second World War begins" },
      { year: 1944, label: "Bretton Woods Conference" }
  ]},
  { cls: 10, subject: "sst", chapter: "age-of-industrialisation", events: [
      { year: 1764, label: "Spinning Jenny devised by James Hargreaves" },
      { year: 1781, label: "James Watt patents his steam engine" },
      { year: 1854, label: "First cotton mill in Bombay" },
      { year: 1855, label: "First jute mill in Bengal" },
      { year: 1874, label: "First spinning and weaving mill in Madras" },
      { year: 1914, label: "First World War: Indian industry grows" },
      { year: 1917, label: "First Indian-owned jute mill in Calcutta" }
  ]},
  { cls: 10, subject: "sst", chapter: "print-culture-and-the-modern-world", events: [
      { year: 868, label: "Diamond Sutra printed in Japan", when: "AD 868" },
      { year: 1295, label: "Marco Polo brings woodblock printing to Italy" },
      { year: 1448, label: "Gutenberg perfects his printing press" },
      { year: 1517, label: "Martin Luther's Ninety-Five Theses" },
      { year: 1558, label: "Roman Church begins the Index of Prohibited Books" },
      { year: 1579, label: "First Tamil book printed at Cochin" },
      { year: 1713, label: "First Malayalam book printed" },
      { year: 1780, label: "Hickey's Bengal Gazette" },
      { year: 1821, label: "Rammohun Roy's Sambad Kaumudi" },
      { year: 1876, label: "Amar Jiban, first Bengali autobiography" },
      { year: 1878, label: "Vernacular Press Act" },
      { year: 1908, label: "Tilak imprisoned for writings in Kesari" }
  ]},
  { cls: 10, subject: "sstpb", chapter: "gurus-angad-dev-to-tegh-bahadur", events: [
      { year: 1539, label: "Guru Angad Dev Ji becomes Guru" },
      { year: 1552, label: "Guru Amar Das Ji becomes Guru" },
      { year: 1574, label: "Guru Ram Das Ji becomes Guru" },
      { year: 1581, label: "Guru Arjan Dev Ji becomes Guru" },
      { year: 1604, label: "Adi Granth compiled" },
      { year: 1606, label: "Guru Arjan martyred; Guru Hargobind becomes Guru" },
      { year: 1634, label: "Guru Hargobind fights at Amritsar" },
      { year: 1644, label: "Guru Har Rai Ji becomes Guru" },
      { year: 1661, label: "Guru Har Krishan Ji becomes Guru" },
      { year: 1664, label: "Guru Tegh Bahadur Ji becomes Guru" },
      { year: 1675, label: "Guru Tegh Bahadur Ji martyred at Delhi" }
  ]},
  { cls: 10, subject: "sstpb", chapter: "guru-gobind-singh-ji", events: [
      { year: 1666, label: "Guru Gobind Singh Ji born at Patna" },
      { year: 1675, label: "Becomes Guru after his father's martyrdom" },
      { year: 1686, label: "Battle of Bhangani" },
      { year: 1691, label: "Battle of Nadaun" },
      { year: 1699, label: "Creation of the Khalsa at Anandpur Sahib" },
      { year: 1704, label: "Chamkaur; the Sahibzade martyred" },
      { year: 1705, label: "Battle of Muktsar" },
      { year: 1708, label: "Guru Granth Sahib declared the Guru" }
  ]},
  { cls: 10, subject: "sstpb", chapter: "banda-singh-bahadur-and-misls", events: [
      { year: 1670, label: "Banda Singh Bahadur born (Lachhman Dev)", when: "c. 1670" },
      { year: 1708, label: "Banda Singh meets Guru Gobind Singh Ji at Nanded" },
      { year: 1709, label: "Banda Singh captures Samana" },
      { year: 1710, label: "Chappar Chiri; Sirhind captured" },
      { year: 1715, label: "Banda Singh captured at Gurdas Nangal" },
      { year: 1716, label: "Banda Singh martyred at Delhi" },
      { year: 1748, label: "Dal Khalsa formed at Amritsar" },
      { year: 1762, label: "Vadda Ghallughara" },
      { year: 1765, label: "Sikhs take Lahore", when: "c. 1765" }
  ]},
  { cls: 10, subject: "sstpb", chapter: "maharaja-ranjit-singh", events: [
      { year: 1780, label: "Ranjit Singh born at Gujranwala" },
      { year: 1792, label: "Becomes chief of Sukerchakia Misl" },
      { year: 1799, label: "Captures Lahore" },
      { year: 1801, label: "Proclaimed Maharaja" },
      { year: 1802, label: "Takes Amritsar" },
      { year: 1807, label: "Takes Kasur" },
      { year: 1809, label: "Treaty of Amritsar with the British" },
      { year: 1813, label: "Takes Attock" },
      { year: 1818, label: "Takes Multan" },
      { year: 1819, label: "Takes Kashmir" },
      { year: 1834, label: "Takes Peshawar" },
      { year: 1839, label: "Death of Maharaja Ranjit Singh" }
  ]},
  { cls: 10, subject: "sstpb", chapter: "anglo-sikh-wars", events: [
      { year: 1839, label: "Death of Ranjit Singh" },
      { year: 1843, label: "Duleep Singh becomes Maharaja" },
      { year: 1845, label: "First Anglo-Sikh War begins" },
      { year: 1846, label: "Treaty of Lahore" },
      { year: 1848, label: "Revolt at Multan; Second Anglo-Sikh War" },
      { year: 1849, label: "British annex Punjab" }
  ]},
  { cls: 10, subject: "sstpb", chapter: "punjab-freedom-struggle", events: [
      { year: 1872, label: "Kukas put to death at Malerkotla" },
      { year: 1873, label: "Singh Sabha movement begins" },
      { year: 1877, label: "Arya Samaj founded at Lahore" },
      { year: 1907, label: "Pagri Sambhal Jatta movement" },
      { year: 1913, label: "Ghadar Party founded" },
      { year: 1914, label: "Komagata Maru incident" },
      { year: 1919, label: "Jallianwala Bagh massacre" },
      { year: 1920, label: "SGPC formed; Akali movement begins" },
      { year: 1925, label: "Sikh Gurdwaras Act" },
      { year: 1929, label: "Purna Swaraj resolution at Lahore" },
      { year: 1931, label: "Bhagat Singh, Sukhdev, Rajguru hanged" },
      { year: 1940, label: "Udham Singh shoots Michael O'Dwyer" }
  ]},
  { cls: 10, subject: "phc", chapter: "bridge-course", events: [
      { year: 1469, label: "Birth of Guru Nanak Dev Ji" },
      { year: 1604, label: "Adi Granth compiled" },
      { year: 1606, label: "Martyrdom of Guru Arjan Dev Ji" },
      { year: 1675, label: "Martyrdom of Guru Tegh Bahadur Ji" },
      { year: 1699, label: "Creation of the Khalsa" },
      { year: 1708, label: "Guru Granth Sahib declared the Guru" },
      { year: 1947, label: "Punjab divided between India and Pakistan" },
      { year: 1966, label: "Present Indian Punjab formed" }
  ]},
  { cls: 10, subject: "phc", chapter: "banda-singh-bahadur", events: [
      { year: 1670, label: "Banda Singh Bahadur born at Rajouri", when: "c. 1670" },
      { year: 1708, label: "Meets Guru Gobind Singh Ji at Nanded" },
      { year: 1709, label: "Captures Samana" },
      { year: 1710, label: "Chappar Chiri; Sirhind captured" },
      { year: 1715, label: "Captured at Gurdas Nangal" },
      { year: 1716, label: "Martyred at Delhi" }
  ]},
  { cls: 10, subject: "phc", chapter: "dal-khalsa-and-misls", events: [
      { year: 1734, label: "Buddha Dal and Taruna Dal organised", when: "c. 1734" },
      { year: 1739, label: "Nadir Shah invades" },
      { year: 1748, label: "Dal Khalsa formed at Amritsar" },
      { year: 1762, label: "Vadda Ghallughara" },
      { year: 1765, label: "Sikhs take Lahore", when: "c. 1765" }
  ]},
  { cls: 10, subject: "phc", chapter: "maharaja-ranjit-singh", events: [
      { year: 1780, label: "Ranjit Singh born at Gujranwala" },
      { year: 1792, label: "Becomes chief of Sukerchakia Misl" },
      { year: 1799, label: "Captures Lahore" },
      { year: 1801, label: "Proclaimed Maharaja" },
      { year: 1802, label: "Takes Amritsar" },
      { year: 1807, label: "Conquers Kasur" },
      { year: 1809, label: "Treaty of Amritsar with the British" },
      { year: 1818, label: "Conquers Multan" },
      { year: 1819, label: "Conquers Kashmir" },
      { year: 1834, label: "Conquers Peshawar" },
      { year: 1839, label: "Death of Ranjit Singh" }
  ]},
  { cls: 10, subject: "phc", chapter: "anglo-sikh-wars", events: [
      { year: 1839, label: "Death of Ranjit Singh" },
      { year: 1843, label: "Duleep Singh becomes Maharaja" },
      { year: 1845, label: "First Anglo-Sikh War begins" },
      { year: 1846, label: "Treaty of Lahore" },
      { year: 1848, label: "Revolt at Multan; Second Anglo-Sikh War" },
      { year: 1849, label: "Punjab annexed by Lord Dalhousie" }
  ]},
  { cls: 10, subject: "phc", chapter: "freedom-fighters", events: [
      { year: 1913, label: "Ghadar Party founded" },
      { year: 1915, label: "Kartar Singh Sarabha hanged" },
      { year: 1919, label: "Jallianwala Bagh massacre" },
      { year: 1928, label: "Lala Lajpat Rai dies after lathi charge" },
      { year: 1929, label: "Bhagat Singh throws bombs in the Assembly" },
      { year: 1931, label: "Bhagat Singh, Sukhdev, Rajguru hanged" },
      { year: 1940, label: "Udham Singh shoots Michael O'Dwyer" }
  ]},
  { cls: 11, subject: "history", chapter: "empire-across-three-continents", events: [
      { year: -73, label: "Spartacus leads a slave revolt", when: "73 BCE" },
      { year: -44, label: "Julius Caesar assassinated", when: "44 BCE" },
      { year: -27, label: "Augustus becomes the first Roman emperor", when: "27 BCE" },
      { year: 98, label: "Trajan becomes emperor", when: "98 CE" },
      { year: 225, label: "Sasanians replace the Parthians in Iran", when: "225 CE" },
      { year: 330, label: "Constantinople becomes the new capital", when: "330 CE" }
  ]},
  { cls: 11, subject: "history", chapter: "nomadic-empires", events: [
      { year: 1162, label: "Temujin is born", when: "c. 1162" },
      { year: 1206, label: "Temujin proclaimed Chinggis Khan" },
      { year: 1215, label: "Mongols capture Beijing" },
      { year: 1227, label: "Death of Chinggis Khan" },
      { year: 1258, label: "Hulegu captures Baghdad" }
  ]},
  { cls: 11, subject: "history", chapter: "the-three-orders", events: [
      { year: 800, label: "Charlemagne crowned emperor by the Pope", when: "800 CE" },
      { year: 910, label: "Cluny monastery founded" },
      { year: 1066, label: "Battle of Hastings" },
      { year: 1098, label: "Cistercian order founded" },
      { year: 1337, label: "Hundred Years' War begins" },
      { year: 1347, label: "Black Death reaches Europe", when: "c. 1347" },
      { year: 1358, label: "Jacquerie revolt in France" },
      { year: 1381, label: "English peasant revolt" }
  ]},
  { cls: 11, subject: "history", chapter: "changing-cultural-traditions", events: [
      { year: 1453, label: "Constantinople falls to the Ottomans" },
      { year: 1513, label: "Machiavelli writes The Prince" },
      { year: 1517, label: "Luther's Ninety-five Theses" },
      { year: 1543, label: "Copernicus publishes his heliocentric theory" },
      { year: 1860, label: "Burckhardt describes the Renaissance" }
  ]},
  { cls: 11, subject: "history", chapter: "paths-to-modernisation", events: [
      { year: 1603, label: "Tokugawa shogunate begins in Japan" },
      { year: 1839, label: "First Opium War begins in China" },
      { year: 1853, label: "Commodore Perry arrives in Japan" },
      { year: 1867, label: "Meiji Restoration in Japan", when: "1867-68" },
      { year: 1889, label: "Japan adopts a constitution" },
      { year: 1894, label: "Japan defeats China", when: "1894-95" },
      { year: 1904, label: "Japan defeats Russia", when: "1904-05" },
      { year: 1911, label: "Qing dynasty overthrown in China" },
      { year: 1921, label: "Chinese Communist Party founded" },
      { year: 1934, label: "The Long March begins", when: "1934-35" },
      { year: 1949, label: "People's Republic of China declared" },
      { year: 1958, label: "Great Leap Forward" }
  ]},
  { cls: 11, subject: "historypb", chapter: "mauryas", events: [
      { year: -321, label: "Chandragupta Maurya founds the Maurya empire", when: "c. 321 BCE" },
      { year: -305, label: "Chandragupta defeats Seleucus Nikator", when: "c. 305 BCE" },
      { year: -268, label: "Ashoka becomes emperor", when: "c. 268 BCE" },
      { year: -261, label: "Kalinga war", when: "c. 261 BCE" },
      { year: -185, label: "Pushyamitra Shunga ends Maurya rule", when: "c. 185 BCE" }
  ]},
  { cls: 11, subject: "historypb", chapter: "rajputs", events: [
      { year: 1000, label: "Mahmud of Ghazni's raids begin", when: "c. 1000" },
      { year: 1025, label: "Mahmud of Ghazni sacks Somnath", when: "c. 1025" },
      { year: 1027, label: "Mahmud of Ghazni's raids end", when: "c. 1027" },
      { year: 1191, label: "First Battle of Tarain" },
      { year: 1192, label: "Second Battle of Tarain" }
  ]},
  { cls: 11, subject: "historypb", chapter: "delhi-sultanate", events: [
      { year: 1206, label: "Qutbuddin Aibak founds the Mamluk dynasty" },
      { year: 1236, label: "Razia Sultan begins to rule" },
      { year: 1266, label: "Balban begins to rule" },
      { year: 1290, label: "Khalji dynasty begins" },
      { year: 1296, label: "Alauddin Khalji begins to rule" },
      { year: 1320, label: "Tughlaq dynasty begins" },
      { year: 1325, label: "Muhammad bin Tughlaq begins to rule" },
      { year: 1398, label: "Timur sacks Delhi" },
      { year: 1414, label: "Sayyid dynasty begins" },
      { year: 1451, label: "Lodi dynasty begins" },
      { year: 1526, label: "Babur defeats Ibrahim Lodi at Panipat" }
  ]},
  { cls: 11, subject: "historypb", chapter: "bahmani-vijayanagar", events: [
      { year: 1336, label: "Vijayanagar founded by Harihara and Bukka" },
      { year: 1347, label: "Bahmani kingdom founded by Hasan Gangu" },
      { year: 1509, label: "Krishnadevaraya begins to rule" },
      { year: 1529, label: "Krishnadevaraya's reign ends" },
      { year: 1565, label: "Battle of Talikota" }
  ]},
  { cls: 11, subject: "historypb", chapter: "guru-nanak-sikhism", events: [
      { year: 1469, label: "Guru Nanak Dev Ji is born" },
      { year: 1539, label: "Guru Nanak passes away; Guru Angad succeeds" },
      { year: 1552, label: "Guru Amar Das Ji becomes Guru" },
      { year: 1574, label: "Guru Ram Das Ji becomes Guru" },
      { year: 1581, label: "Guru Arjan Dev Ji becomes Guru" },
      { year: 1604, label: "Adi Granth compiled" },
      { year: 1606, label: "Guru Arjan martyred; Guru Hargobind becomes Guru" },
      { year: 1675, label: "Guru Tegh Bahadur Ji martyred" },
      { year: 1699, label: "Khalsa created at Anandpur Sahib" },
      { year: 1708, label: "Guru Granth Sahib declared the eternal Guru" }
  ]},
  { cls: 11, subject: "historypb", chapter: "mughal-establishment", events: [
      { year: 1526, label: "First Battle of Panipat" },
      { year: 1527, label: "Battle of Khanwa" },
      { year: 1529, label: "Battle of Ghaghra" },
      { year: 1530, label: "Babur dies" },
      { year: 1539, label: "Battle of Chausa" },
      { year: 1540, label: "Battle of Kannauj; Sher Shah rules" },
      { year: 1545, label: "Sher Shah dies" },
      { year: 1555, label: "Humayun recovers Delhi" },
      { year: 1556, label: "Second Battle of Panipat; Akbar crowned" }
  ]},
  { cls: 11, subject: "historypb", chapter: "marathas", events: [
      { year: 1630, label: "Shivaji is born", when: "1630" },
      { year: 1646, label: "Shivaji captures Torna" },
      { year: 1659, label: "Shivaji kills Afzal Khan" },
      { year: 1665, label: "Treaty of Purandar" },
      { year: 1666, label: "Shivaji visits Aurangzeb at Agra" },
      { year: 1674, label: "Shivaji crowned Chhatrapati at Raigad" },
      { year: 1680, label: "Shivaji dies" },
      { year: 1689, label: "Sambhaji executed" },
      { year: 1761, label: "Third Battle of Panipat" },
      { year: 1818, label: "Last Anglo-Maratha war ends" }
  ]},
  { cls: 11, subject: "historypb", chapter: "rise-of-sikhs", events: [
      { year: 1708, label: "Banda Singh Bahadur sent to Punjab" },
      { year: 1710, label: "Banda captures Sirhind" },
      { year: 1715, label: "Banda besieged at Gurdas Nangal" },
      { year: 1716, label: "Banda executed at Delhi" },
      { year: 1748, label: "Dal Khalsa formed at Amritsar" },
      { year: 1762, label: "Vadda Ghallughara" },
      { year: 1764, label: "Sikhs capture Sirhind" }
  ]},
  { cls: 11, subject: "historypb", chapter: "ranjit-singh", events: [
      { year: 1780, label: "Ranjit Singh is born" },
      { year: 1799, label: "Takes Lahore" },
      { year: 1801, label: "Proclaimed Maharaja" },
      { year: 1802, label: "Occupies Amritsar" },
      { year: 1809, label: "Treaty of Amritsar" },
      { year: 1818, label: "Conquers Multan" },
      { year: 1819, label: "Conquers Kashmir" },
      { year: 1834, label: "Brings Peshawar under control" },
      { year: 1838, label: "Tripartite Treaty" },
      { year: 1839, label: "Ranjit Singh dies" }
  ]},
  { cls: 11, subject: "historypb", chapter: "europeans", events: [
      { year: 1498, label: "Vasco da Gama reaches Calicut" },
      { year: 1510, label: "Portuguese capture Goa" },
      { year: 1600, label: "English East India Company chartered" },
      { year: 1602, label: "Dutch East India Company founded" },
      { year: 1613, label: "English factory at Surat" },
      { year: 1639, label: "English found Madras" },
      { year: 1664, label: "French East India Company founded" },
      { year: 1668, label: "Bombay passes to the English Company" },
      { year: 1690, label: "Calcutta founded by Job Charnock" },
      { year: 1746, label: "First Carnatic War begins", when: "c. 1746" },
      { year: 1760, label: "Battle of Wandiwash" }
  ]},
  { cls: 11, subject: "historypb", chapter: "british-expansion", events: [
      { year: 1757, label: "Battle of Plassey" },
      { year: 1764, label: "Battle of Buxar" },
      { year: 1765, label: "Treaty of Allahabad: diwani of Bengal" },
      { year: 1775, label: "First Anglo-Maratha War begins" },
      { year: 1798, label: "Hyderabad accepts the Subsidiary Alliance" },
      { year: 1799, label: "Tipu Sultan dies at Seringapatam" },
      { year: 1843, label: "Sindh annexed" },
      { year: 1845, label: "First Anglo-Sikh War begins" },
      { year: 1848, label: "Satara annexed by Doctrine of Lapse" },
      { year: 1849, label: "Punjab annexed" },
      { year: 1853, label: "Jhansi annexed by Doctrine of Lapse" },
      { year: 1856, label: "Awadh annexed" }
  ]},
  { cls: 11, subject: "historypb", chapter: "social-economic-changes", events: [
      { year: 1793, label: "Permanent Settlement" },
      { year: 1829, label: "Sati banned" },
      { year: 1835, label: "Macaulay's Minute on English education" },
      { year: 1853, label: "First railway line, Bombay to Thane" },
      { year: 1854, label: "Wood's Despatch" },
      { year: 1856, label: "Widow Remarriage Act" },
      { year: 1857, label: "Universities set up at Calcutta, Bombay, Madras" }
  ]},
  { cls: 11, subject: "historypb", chapter: "socio-religious-movements", events: [
      { year: 1828, label: "Brahmo Samaj founded" },
      { year: 1872, label: "Kukas executed after Malerkotla" },
      { year: 1873, label: "Singh Sabha movement begins at Amritsar" },
      { year: 1875, label: "Arya Samaj founded; Aligarh college founded" },
      { year: 1879, label: "Singh Sabha founded at Lahore" }
  ]},
  { cls: 11, subject: "historypb", chapter: "political-consciousness", events: [
      { year: 1857, label: "Revolt begins at Meerut" },
      { year: 1858, label: "Government of India Act; Crown takes over" },
      { year: 1885, label: "Indian National Congress founded" },
      { year: 1905, label: "Partition of Bengal" },
      { year: 1906, label: "Muslim League formed" },
      { year: 1909, label: "Morley-Minto Reforms" },
      { year: 1916, label: "Home Rule Leagues; Lucknow Pact" },
      { year: 1919, label: "Rowlatt Act; Jallianwala Bagh massacre" }
  ]},
  { cls: 11, subject: "historypb", chapter: "towards-freedom", events: [
      { year: 1922, label: "Non-Cooperation withdrawn after Chauri Chaura" },
      { year: 1929, label: "Congress declares Purna Swaraj at Lahore" },
      { year: 1930, label: "Dandi March; Civil Disobedience begins" },
      { year: 1931, label: "Bhagat Singh, Sukhdev, Rajguru executed" },
      { year: 1935, label: "Government of India Act" },
      { year: 1942, label: "Quit India Movement" },
      { year: 1946, label: "Cabinet Mission" },
      { year: 1947, label: "India becomes independent" }
  ]},
  { cls: 11, subject: "polsci", chapter: "constitution-why-and-how", events: [
      { year: 1928, label: "Motilal Nehru Report" },
      { year: 1931, label: "Karachi Resolution on fundamental rights" },
      { year: 1935, label: "Government of India Act" },
      { year: 1946, label: "Constituent Assembly first meets" },
      { year: 1947, label: "Drafting Committee set up under Ambedkar" },
      { year: 1949, label: "Constitution adopted" },
      { year: 1950, label: "Constitution comes into force" }
  ]},
  { cls: 11, subject: "polsci", chapter: "constitution-as-a-living-document", events: [
      { year: 1950, label: "Constitution comes into force" },
      { year: 1963, label: "15th Amendment: High Court judges' retirement age" },
      { year: 1967, label: "Golaknath case" },
      { year: 1971, label: "24th Amendment" },
      { year: 1973, label: "Kesavananda Bharati case" },
      { year: 1975, label: "National Emergency begins" },
      { year: 1976, label: "42nd Amendment" },
      { year: 1978, label: "44th Amendment" },
      { year: 1980, label: "Minerva Mills case" },
      { year: 1985, label: "52nd Amendment: anti-defection law" },
      { year: 1988, label: "61st Amendment: voting age 18" },
      { year: 1992, label: "73rd and 74th Amendments: local government" }
  ]},
  { cls: 12, subject: "history", chapter: "bricks-beads-and-bones", events: [
      { year: -2600, label: "Mature Harappan phase begins", when: "c. 2600 BCE" },
      { year: -1900, label: "Mature Harappan sites abandoned", when: "c. 1900 BCE" },
      { year: 1921, label: "Daya Ram Sahni excavates Harappa" },
      { year: 1922, label: "R. D. Banerji finds Mohenjodaro" },
      { year: 1924, label: "John Marshall announces the discovery" }
  ]},
  { cls: 12, subject: "history", chapter: "an-imperial-capital-vijayanagara", events: [
      { year: 1336, label: "Vijayanagara founded by Harihara and Bukka" },
      { year: 1509, label: "Krishnadeva Raya begins to rule" },
      { year: 1529, label: "Krishnadeva Raya's reign ends" },
      { year: 1565, label: "Battle of Rakshasi-Tangadi (Talikota)" },
      { year: 1800, label: "Colin Mackenzie surveys the ruins at Hampi" }
  ]},
  { cls: 12, subject: "history", chapter: "colonialism-and-the-countryside", events: [
      { year: 1765, label: "Company gets the diwani of Bengal" },
      { year: 1793, label: "Permanent Settlement" },
      { year: 1832, label: "Damin-i-Koh marked out" },
      { year: 1855, label: "Santhal rebellion", when: "1855-56" },
      { year: 1856, label: "Santhal Parganas created" },
      { year: 1859, label: "Limitation Law" },
      { year: 1861, label: "American Civil War begins; cotton boom", when: "1861-65" },
      { year: 1875, label: "Deccan riots" }
  ]},
  { cls: 12, subject: "history", chapter: "mahatma-gandhi-and-the-nationalist-movement", events: [
      { year: 1915, label: "Gandhi returns to India" },
      { year: 1917, label: "Champaran satyagraha" },
      { year: 1919, label: "Rowlatt Act; Jallianwala Bagh massacre" },
      { year: 1920, label: "Non-Cooperation Movement begins" },
      { year: 1922, label: "Chauri Chaura; movement withdrawn" },
      { year: 1929, label: "Lahore Congress demands Purna Swaraj" },
      { year: 1930, label: "Salt March to Dandi" },
      { year: 1932, label: "Poona Pact" },
      { year: 1940, label: "Lahore Resolution of the Muslim League" },
      { year: 1942, label: "Quit India resolution" },
      { year: 1947, label: "India becomes independent" },
      { year: 1948, label: "Gandhi is assassinated" }
  ]},
  { cls: 12, subject: "history", chapter: "framing-the-constitution", events: [
      { year: 1935, label: "Government of India Act" },
      { year: 1946, label: "Constituent Assembly first meets" },
      { year: 1947, label: "Objectives Resolution adopted" },
      { year: 1949, label: "Constitution adopted" },
      { year: 1950, label: "Constitution comes into force" }
  ]},
  { cls: 12, subject: "historypb", chapter: "guru-gobind-singh-ji", events: [
      { year: 1666, label: "Born at Patna" },
      { year: 1675, label: "Becomes Guru" },
      { year: 1699, label: "Khalsa created at Anandpur Sahib" },
      { year: 1704, label: "Anandpur left; Chamkaur and Sirhind" },
      { year: 1705, label: "Battle of Muktsar" },
      { year: 1707, label: "Meets Emperor Bahadur Shah" },
      { year: 1708, label: "Passes away at Nanded" }
  ]},
  { cls: 12, subject: "historypb", chapter: "banda-singh-bahadur", events: [
      { year: 1708, label: "Meets Guru Gobind Singh Ji at Nanded" },
      { year: 1709, label: "Captures Samana and Sadhaura" },
      { year: 1710, label: "Chappar Chiri; Sirhind taken" },
      { year: 1715, label: "Siege of Gurdas Nangal" },
      { year: 1716, label: "Executed at Delhi" }
  ]},
  { cls: 12, subject: "historypb", chapter: "abdus-samad-zakariya-mir-mannu", events: [
      { year: 1713, label: "Abdus Samad Khan becomes governor of Lahore" },
      { year: 1715, label: "Abdus Samad captures Banda" },
      { year: 1726, label: "Zakariya Khan governor; Bhai Tara Singh Wan executed" },
      { year: 1733, label: "Nawabship offered to Kapur Singh" },
      { year: 1734, label: "Bhai Mani Singh martyred" },
      { year: 1745, label: "Zakariya Khan's rule ends" },
      { year: 1746, label: "Chhota Ghallughara" },
      { year: 1748, label: "Mir Mannu becomes governor" },
      { year: 1753, label: "Mir Mannu dies" }
  ]},
  { cls: 12, subject: "historypb", chapter: "ahmad-shah-abdali", events: [
      { year: 1739, label: "Nadir Shah invades India" },
      { year: 1747, label: "Ahmad Shah Abdali founds the Afghan state" },
      { year: 1748, label: "Abdali checked at Manupur" },
      { year: 1753, label: "Mir Mannu dies; Punjab in confusion" },
      { year: 1757, label: "Harmandir Sahib desecrated; Baba Deep Singh martyred" },
      { year: 1758, label: "Sikhs and Marathas drive Timur Shah from Lahore" },
      { year: 1761, label: "Third Battle of Panipat" },
      { year: 1762, label: "Vadda Ghallughara" },
      { year: 1764, label: "Sikhs capture Sirhind" },
      { year: 1765, label: "Sikhs take Lahore" },
      { year: 1767, label: "Abdali's last invasion" },
      { year: 1772, label: "Death of Ahmad Shah Abdali" }
  ]},
  { cls: 12, subject: "historypb", chapter: "ranjit-singh-conquests", events: [
      { year: 1780, label: "Ranjit Singh is born" },
      { year: 1790, label: "His father Mahan Singh dies" },
      { year: 1799, label: "Captures Lahore" },
      { year: 1801, label: "Recognised as Maharaja" },
      { year: 1802, label: "Takes Amritsar" },
      { year: 1809, label: "Treaty of Amritsar; Kangra taken" },
      { year: 1813, label: "Takes Attock" },
      { year: 1818, label: "Takes Multan" },
      { year: 1819, label: "Takes Kashmir" },
      { year: 1834, label: "Annexes Peshawar" },
      { year: 1839, label: "Ranjit Singh dies" }
  ]},
  { cls: 12, subject: "historypb", chapter: "anglo-sikh-relations-1800-1839", events: [
      { year: 1806, label: "Treaty with Holkar and the British at Lahore" },
      { year: 1808, label: "Charles Metcalfe sent to Lahore" },
      { year: 1809, label: "Treaty of Amritsar" },
      { year: 1831, label: "Meeting with Bentinck at Ropar" },
      { year: 1832, label: "Treaty opens the Indus to British trade" },
      { year: 1835, label: "British take Ferozepur" },
      { year: 1838, label: "Tripartite Treaty" }
  ]},
  { cls: 12, subject: "historypb", chapter: "afghanistan-and-frontier-policy", events: [
      { year: 1813, label: "Battle of Haidru; Attock taken" },
      { year: 1818, label: "Multan taken" },
      { year: 1819, label: "Kashmir taken" },
      { year: 1823, label: "Battle of Naushera" },
      { year: 1834, label: "Peshawar annexed" },
      { year: 1837, label: "Battle of Jamrud" }
  ]},
  { cls: 12, subject: "polsci", chapter: "end-of-bipolarity", events: [
      { year: 1917, label: "Socialist revolution in Russia" },
      { year: 1922, label: "USSR created" },
      { year: 1961, label: "Berlin Wall built" },
      { year: 1979, label: "Soviet intervention in Afghanistan" },
      { year: 1985, label: "Gorbachev begins perestroika and glasnost" },
      { year: 1989, label: "Fall of the Berlin Wall" },
      { year: 1990, label: "Lithuania declares independence" },
      { year: 1991, label: "Gorbachev resigns; the Soviet Union ends" }
  ]},
  { cls: 12, subject: "polsci", chapter: "challenges-of-nation-building", events: [
      { year: 1947, label: "Independence; Nehru's tryst with destiny speech" },
      { year: 1948, label: "Hyderabad integrated after army action" },
      { year: 1949, label: "Manipur Merger Agreement" },
      { year: 1952, label: "Separate Andhra state announced" },
      { year: 1953, label: "States Reorganisation Commission appointed" },
      { year: 1956, label: "States Reorganisation Act" },
      { year: 1960, label: "Maharashtra and Gujarat formed" },
      { year: 1963, label: "Nagaland formed" },
      { year: 1966, label: "Haryana formed" },
      { year: 1972, label: "Meghalaya, Manipur and Tripura formed" },
      { year: 1987, label: "Mizoram and Arunachal Pradesh formed" },
      { year: 2000, label: "Chhattisgarh, Uttarakhand, Jharkhand formed" }
  ]},
  { cls: 12, subject: "polsci", chapter: "era-of-one-party-dominance", events: [
      { year: 1934, label: "Congress Socialist Party formed" },
      { year: 1950, label: "Election Commission set up" },
      { year: 1951, label: "Bharatiya Jana Sangh founded" },
      { year: 1952, label: "First general election results; Congress wins" },
      { year: 1957, label: "CPI government in Kerala" },
      { year: 1959, label: "Swatantra Party formed" },
      { year: 1964, label: "CPI splits into CPI and CPI(M)" }
  ]},
  { cls: 12, subject: "polsci", chapter: "politics-of-planned-development", events: [
      { year: 1944, label: "Bombay Plan" },
      { year: 1950, label: "Planning Commission set up" },
      { year: 1951, label: "First Five Year Plan begins" },
      { year: 1956, label: "Second Five Year Plan begins" },
      { year: 1969, label: "14 private banks nationalised" },
      { year: 1970, label: "Operation Flood begins" },
      { year: 1991, label: "New Economic Policy" },
      { year: 2015, label: "NITI Aayog replaces the Planning Commission" }
  ]},
  { cls: 12, subject: "polsci", chapter: "indias-external-relations", events: [
      { year: 1947, label: "Asian Relations Conference, New Delhi" },
      { year: 1954, label: "Panchsheel signed" },
      { year: 1955, label: "Bandung Conference" },
      { year: 1961, label: "First NAM summit, Belgrade" },
      { year: 1962, label: "Chinese invasion" },
      { year: 1964, label: "China's first nuclear test" },
      { year: 1966, label: "Tashkent Agreement" },
      { year: 1971, label: "Bangladesh war; Indo-Soviet Treaty" },
      { year: 1972, label: "Shimla Agreement" },
      { year: 1974, label: "India's first nuclear test" },
      { year: 1998, label: "India's nuclear tests" },
      { year: 1999, label: "Kargil conflict" }
  ]},
  { cls: 12, subject: "polsci", chapter: "challenges-to-congress-system", events: [
      { year: 1964, label: "Nehru dies; Shastri becomes PM" },
      { year: 1965, label: "War with Pakistan" },
      { year: 1966, label: "Indira Gandhi becomes PM" },
      { year: 1967, label: "Fourth general election" },
      { year: 1969, label: "Congress splits; banks nationalised" },
      { year: 1971, label: "Garibi hatao; Congress (R) wins" }
  ]},
  { cls: 12, subject: "polsci", chapter: "crisis-of-democratic-order", events: [
      { year: 1967, label: "Naxalbari uprising" },
      { year: 1973, label: "Kesavananda Bharati case" },
      { year: 1974, label: "Gujarat and Bihar movements; railway strike" },
      { year: 1975, label: "Emergency proclaimed" },
      { year: 1976, label: "42nd Amendment" },
      { year: 1977, label: "Janata Party wins Lok Sabha elections" },
      { year: 1978, label: "44th Amendment" },
      { year: 1980, label: "Congress returns to power" }
  ]},
  { cls: 12, subject: "polsci", chapter: "regional-aspirations", events: [
      { year: 1920, label: "Akali Dal formed" },
      { year: 1947, label: "J&K Instrument of Accession signed" },
      { year: 1948, label: "Sheikh Abdullah becomes PM of J&K" },
      { year: 1961, label: "Goa liberated" },
      { year: 1966, label: "Punjab reorganised" },
      { year: 1973, label: "Anandpur Sahib Resolution" },
      { year: 1975, label: "Sikkim becomes a state" },
      { year: 1984, label: "Operation Blue Star; Indira Gandhi assassinated" },
      { year: 1985, label: "Punjab Accord and Assam Accord" },
      { year: 1987, label: "Mizoram and Goa become states" },
      { year: 1989, label: "Militancy begins in J&K" },
      { year: 2019, label: "Article 370 provisions revoked" }
  ]},
  { cls: 12, subject: "polsci", chapter: "recent-developments-in-indian-politics", events: [
      { year: 1978, label: "Mandal Commission set up" },
      { year: 1985, label: "Shah Bano case" },
      { year: 1989, label: "National Front government under V.P. Singh" },
      { year: 1990, label: "Decision to implement Mandal" },
      { year: 1991, label: "Rajiv Gandhi assassinated; new economic policy" },
      { year: 1992, label: "Babri Masjid demolished" },
      { year: 1996, label: "United Front government" },
      { year: 1998, label: "NDA government under Vajpayee" },
      { year: 2002, label: "Godhra incident and violence in Gujarat" },
      { year: 2004, label: "UPA government under Manmohan Singh" },
      { year: 2014, label: "BJP wins 282 seats; Modi becomes PM" },
      { year: 2019, label: "BJP wins 303 seats; NDA returns" }
  ]},
  { cls: 12, subject: "polscipb", chapter: "nation-building", events: [
      { year: 1947, label: "Independence and Partition" },
      { year: 1949, label: "Constitution adopted" },
      { year: 1950, label: "Constitution comes into force" },
      { year: 1953, label: "States Reorganisation Commission; Andhra formed" },
      { year: 1956, label: "States Reorganisation Act" },
      { year: 1960, label: "Maharashtra and Gujarat formed" },
      { year: 1966, label: "Punjab and Haryana formed" }
  ]}
]);
