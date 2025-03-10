<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="tr" sourcelanguage="en">
  <context>
    <name>AbstractDb</name>
    <message>
      <location filename="../db/abstractdb.cpp" line="349"/>
      <location filename="../db/abstractdb.cpp" line="366"/>
      <source>Cannot execute query on closed database.</source>
      <translation>Kapalı veritabanında sorgu çalıştırılamaz.</translation>
    </message>
    <message>
      <location filename="../db/abstractdb.cpp" line="661"/>
      <source>Error attaching database %1: %2</source>
      <translation>Veritabanına eklenirken hata %1: %2</translation>
    </message>
    <message>
      <location filename="../db/abstractdb.cpp" line="919"/>
      <source>Failed to make full WAL checkpoint on database &apos;%1&apos;. Error returned from SQLite engine: %2</source>
      <translation type="unfinished">Failed to make full WAL checkpoint on database &apos;%1&apos;. Error returned from SQLite engine: %2</translation>
    </message>
  </context>
  <context>
    <name>ChainExecutor</name>
    <message>
      <location filename="../db/chainexecutor.cpp" line="37"/>
      <source>The database for executing queries was not defined.</source>
      <comment>chain executor</comment>
      <translation>Sorgu çalıştırılacak veritabanı belirtilmemiş.</translation>
    </message>
    <message>
      <location filename="../db/chainexecutor.cpp" line="44"/>
      <source>The database for executing queries was not open.</source>
      <comment>chain executor</comment>
      <translation>Sorgu çalıştırılacak veritabanı açılmamış.</translation>
    </message>
    <message>
      <location filename="../db/chainexecutor.cpp" line="54"/>
      <source>Could not disable foreign keys in the database. Details: %1</source>
      <comment>chain executor</comment>
      <translation>Veritabanındaki ikincil anahtar devredışı bırakılamadı. Detaylar: %1</translation>
    </message>
    <message>
      <location filename="../db/chainexecutor.cpp" line="62"/>
      <source>Could not start a database transaction. Details: %1</source>
      <comment>chain executor</comment>
      <translation>Veritabanı işlemi başlatılamadı. Detaylar: %1</translation>
    </message>
    <message>
      <location filename="../db/chainexecutor.cpp" line="89"/>
      <source>Interrupted</source>
      <comment>chain executor</comment>
      <translation>Yarıda kesildi</translation>
    </message>
    <message>
      <location filename="../db/chainexecutor.cpp" line="151"/>
      <source>Could not commit a database transaction. Details: %1</source>
      <comment>chain executor</comment>
      <translation>Veritabanı işlemi başarılı bitirilemedi. Detaylar: %1</translation>
    </message>
  </context>
  <context>
    <name>CompletionHelper</name>
    <message>
      <location filename="../completionhelper.cpp" line="159"/>
      <source>New row reference</source>
      <translation>Yeni satır referansı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="166"/>
      <source>Old row reference</source>
      <translation>Eski satır referansı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="171"/>
      <source>New table name</source>
      <translation>Yeni tablo adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="174"/>
      <source>New index name</source>
      <translation>Yeni indeks</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="177"/>
      <source>New view name</source>
      <translation>Yeni view adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="180"/>
      <source>New trigger name</source>
      <translation>Yeni trigger adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="183"/>
      <source>Table or column alias</source>
      <translation>Tablo ya da kolon takma adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="186"/>
      <source>transaction name</source>
      <translation>işlem adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="189"/>
      <source>New column name</source>
      <translation>Yeni kolon adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="192"/>
      <source>Column data type</source>
      <translation>Kolon veri tipi</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="195"/>
      <source>Constraint name</source>
      <translation>Constraint adı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="208"/>
      <source>Error message</source>
      <translation>Hata mesajı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="257"/>
      <source>Any word</source>
      <translation>Herhangi bir kelime</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="438"/>
      <source>Default database</source>
      <translation>Varsayılan veritabanı</translation>
    </message>
    <message>
      <location filename="../completionhelper.cpp" line="439"/>
      <source>Temporary objects database</source>
      <translation>Geçici nesneler veritabanı</translation>
    </message>
  </context>
  <context>
    <name>ConfigImpl</name>
    <message>
      <location filename="../services/impl/configimpl.cpp" line="867"/>
      <source>Could not start database transaction for deleting SQL history, therefore it&apos;s not deleted.</source>
      <translation>SQL geçmişini silme işlemi başlatılamadı, bu sebeple silinemedi.</translation>
    </message>
    <message>
      <location filename="../services/impl/configimpl.cpp" line="874"/>
      <source>Could not commit database transaction for deleting SQL history, therefore it&apos;s not deleted.</source>
      <translation>SQL geçmişini silme işlemi commitlenemedi, bu sebeple silinmedi.</translation>
    </message>
  </context>
  <context>
    <name>DbManagerImpl</name>
    <message>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="64"/>
      <source>Could not add database %1: %2</source>
      <translation>%1 veritabanı eklenemedi: %2</translation>
    </message>
    <message>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="137"/>
      <source>Database %1 could not be updated, because of an error: %2</source>
      <translation>%2 hatası sebebiyle %1 veritabanı güncellenemedi</translation>
    </message>
    <message>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="353"/>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="382"/>
      <source>Database file doesn&apos;t exist.</source>
      <translation>Veritabanı dosyası bulunamadı.</translation>
    </message>
    <message>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="355"/>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="384"/>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="603"/>
      <source>No supporting plugin loaded.</source>
      <translation>Hiçbir destekleyen eklenti yüklenmedi.</translation>
    </message>
    <message>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="521"/>
      <source>Database could not be initialized.</source>
      <translation>Veritabanı açılamadı.</translation>
    </message>
    <message>
      <location filename="../services/impl/dbmanagerimpl.cpp" line="531"/>
      <source>No suitable database driver plugin found.</source>
      <translation>Hiçbir veritabanı sürücü eklentisi bulunamadı.</translation>
    </message>
  </context>
  <context>
    <name>DbObjectOrganizer</name>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="373"/>
      <location filename="../dbobjectorganizer.cpp" line="404"/>
      <source>Error while creating table in target database: %1</source>
      <translation>Hedef veritabanında tablo yaratırken hata: %1</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="373"/>
      <source>Could not parse table.</source>
      <translation>Tablo ayrıştırılamadı.</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="418"/>
      <source>Database %1 could not be attached to database %2, so the data of table %3 will be copied with SQLiteStudio as a mediator. This method can be slow for huge tables, so please be patient.</source>
      <translation type="unfinished">Database %1 could not be attached to database %2, so the data of table %3 will be copied with SQLiteStudio as a mediator. This method can be slow for huge tables, so please be patient.</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="442"/>
      <source>Error while copying data for table %1: %2</source>
      <translation type="unfinished">Error while copying data for table %1: %2</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="461"/>
      <location filename="../dbobjectorganizer.cpp" line="468"/>
      <location filename="../dbobjectorganizer.cpp" line="495"/>
      <source>Error while copying data to table %1: %2</source>
      <translation type="unfinished">Error while copying data to table %1: %2</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="517"/>
      <source>Error while dropping source view %1: %2
Tables, indexes, triggers and views copied to database %3 will remain.</source>
      <translation type="unfinished">Error while dropping source view %1: %2
Tables, indexes, triggers and views copied to database %3 will remain.</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="524"/>
      <source>Error while creating view in target database: %1</source>
      <translation type="unfinished">Error while creating view in target database: %1</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="529"/>
      <source>Error while creating index in target database: %1</source>
      <translation type="unfinished">Error while creating index in target database: %1</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="534"/>
      <source>Error while creating trigger in target database: %1</source>
      <translation type="unfinished">Error while creating trigger in target database: %1</translation>
    </message>
    <message>
      <location filename="../dbobjectorganizer.cpp" line="679"/>
      <location filename="../dbobjectorganizer.cpp" line="686"/>
      <location filename="../dbobjectorganizer.cpp" line="695"/>
      <source>Could not parse object &apos;%1&apos; in order to move or copy it.</source>
      <translation type="unfinished">Could not parse object &apos;%1&apos; in order to move or copy it.</translation>
    </message>
  </context>
  <context>
    <name>DdlHistoryModel</name>
    <message>
      <location filename="../ddlhistorymodel.cpp" line="66"/>
      <source>Database name</source>
      <comment>ddl history header</comment>
      <translation type="unfinished">Database name</translation>
    </message>
    <message>
      <location filename="../ddlhistorymodel.cpp" line="68"/>
      <source>Database file</source>
      <comment>ddl history header</comment>
      <translation>Veritabanı dosyası</translation>
    </message>
    <message>
      <location filename="../ddlhistorymodel.cpp" line="70"/>
      <source>Date of execution</source>
      <comment>ddl history header</comment>
      <translation type="unfinished">Date of execution</translation>
    </message>
    <message>
      <location filename="../ddlhistorymodel.cpp" line="72"/>
      <source>Changes</source>
      <comment>ddl history header</comment>
      <translation>Değişiklikler</translation>
    </message>
  </context>
  <context>
    <name>ExportManager</name>
    <message>
      <location filename="../services/exportmanager.cpp" line="72"/>
      <source>Export plugin %1 doesn&apos;t support exporing query results.</source>
      <translation type="unfinished">Export plugin %1 doesn&apos;t support exporing query results.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="98"/>
      <source>Export plugin %1 doesn&apos;t support exporing tables.</source>
      <translation type="unfinished">Export plugin %1 doesn&apos;t support exporing tables.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="122"/>
      <source>Export plugin %1 doesn&apos;t support exporing databases.</source>
      <translation type="unfinished">Export plugin %1 doesn&apos;t support exporing databases.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="155"/>
      <source>Export format &apos;%1&apos; is not supported. Supported formats are: %2.</source>
      <translation type="unfinished">Export format &apos;%1&apos; is not supported. Supported formats are: %2.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="218"/>
      <source>Export to the clipboard was successful.</source>
      <translation type="unfinished">Export to the clipboard was successful.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="222"/>
      <source>Export to the file &apos;%1&apos; was successful.</source>
      <translation type="unfinished">Export to the file &apos;%1&apos; was successful.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="224"/>
      <source>Export was successful.</source>
      <translation type="unfinished">Export was successful.</translation>
    </message>
    <message>
      <location filename="../services/exportmanager.cpp" line="266"/>
      <source>Could not export to file %1. File cannot be open for writting.</source>
      <translation type="unfinished">Could not export to file %1. File cannot be open for writting.</translation>
    </message>
  </context>
  <context>
    <name>ExportWorker</name>
    <message>
      <location filename="../exportworker.cpp" line="123"/>
      <source>Error while exporting query results: %1</source>
      <translation type="unfinished">Error while exporting query results: %1</translation>
    </message>
    <message>
      <location filename="../exportworker.cpp" line="203"/>
      <source>Error while counting data column width to export from query results: %1</source>
      <translation type="unfinished">Error while counting data column width to export from query results: %1</translation>
    </message>
    <message>
      <location filename="../exportworker.cpp" line="347"/>
      <location filename="../exportworker.cpp" line="405"/>
      <source>Could not parse %1 in order to export it. It will be excluded from the export output.</source>
      <translation type="unfinished">Could not parse %1 in order to export it. It will be excluded from the export output.</translation>
    </message>
    <message>
      <location filename="../exportworker.cpp" line="609"/>
      <source>Error while reading data to export from table %1: %2</source>
      <translation type="unfinished">Error while reading data to export from table %1: %2</translation>
    </message>
    <message>
      <location filename="../exportworker.cpp" line="617"/>
      <source>Error while counting data to export from table %1: %2</source>
      <translation type="unfinished">Error while counting data to export from table %1: %2</translation>
    </message>
    <message>
      <location filename="../exportworker.cpp" line="633"/>
      <source>Error while counting data column width to export from table %1: %2</source>
      <translation type="unfinished">Error while counting data column width to export from table %1: %2</translation>
    </message>
  </context>
  <context>
    <name>FunctionManagerImpl</name>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="283"/>
      <source>Invalid number of arguments to function &apos;%1&apos;. Expected %2, but got %3.</source>
      <translation type="unfinished">Invalid number of arguments to function &apos;%1&apos;. Expected %2, but got %3.</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="396"/>
      <source>No such function registered in SQLiteStudio: %1(%2)</source>
      <translation type="unfinished">No such function registered in SQLiteStudio: %1(%2)</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="402"/>
      <source>Function %1(%2) was registered with language %3, but the plugin supporting that language is not currently loaded.</source>
      <translation type="unfinished">Function %1(%2) was registered with language %3, but the plugin supporting that language is not currently loaded.</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="420"/>
      <source>Invalid regular expression pattern: %1</source>
      <translation type="unfinished">Invalid regular expression pattern: %1</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="439"/>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="472"/>
      <source>Could not open file %1 for reading: %2</source>
      <translation type="unfinished">Could not open file %1 for reading: %2</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="494"/>
      <source>Could not open file %1 for writting: %2</source>
      <translation type="unfinished">Could not open file %1 for writting: %2</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="514"/>
      <source>Error while writting to file %1: %2</source>
      <translation type="unfinished">Error while writting to file %1: %2</translation>
    </message>
    <message>
      <location filename="../services/impl/functionmanagerimpl.cpp" line="532"/>
      <source>Unsupported scripting language: %1</source>
      <translation type="unfinished">Unsupported scripting language: %1</translation>
    </message>
  </context>
  <context>
    <name>GenericExportPlugin</name>
    <message>
      <location filename="../plugins/genericexportplugin.cpp" line="20"/>
      <source>Could not initialize text codec for exporting. Using default codec: %1</source>
      <translation type="unfinished">Could not initialize text codec for exporting. Using default codec: %1</translation>
    </message>
  </context>
  <context>
    <name>ImportManager</name>
    <message>
      <location filename="../services/importmanager.cpp" line="96"/>
      <source>Imported data to the table &apos;%1&apos; successfully. Number of imported rows: %2</source>
      <translation type="unfinished">Imported data to the table &apos;%1&apos; successfully. Number of imported rows: %2</translation>
    </message>
  </context>
  <context>
    <name>ImportWorker</name>
    <message>
      <location filename="../importworker.cpp" line="24"/>
      <source>No columns provided by the import plugin.</source>
      <translation type="unfinished">No columns provided by the import plugin.</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="30"/>
      <source>Could not start transaction in order to import a data: %1</source>
      <translation type="unfinished">Could not start transaction in order to import a data: %1</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="53"/>
      <source>Could not commit transaction for imported data: %1</source>
      <translation type="unfinished">Could not commit transaction for imported data: %1</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="100"/>
      <source>Table &apos;%1&apos; has less columns than there are columns in the data to be imported. Excessive data columns will be ignored.</source>
      <translation type="unfinished">Table &apos;%1&apos; has less columns than there are columns in the data to be imported. Excessive data columns will be ignored.</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="105"/>
      <source>Table &apos;%1&apos; has more columns than there are columns in the data to be imported. Some columns in the table will be left empty.</source>
      <translation type="unfinished">Table &apos;%1&apos; has more columns than there are columns in the data to be imported. Some columns in the table will be left empty.</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="124"/>
      <source>Could not create table to import to: %1</source>
      <translation type="unfinished">Could not create table to import to: %1</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="133"/>
      <location filename="../importworker.cpp" line="180"/>
      <location filename="../importworker.cpp" line="187"/>
      <source>Error while importing data: %1</source>
      <translation type="unfinished">Error while importing data: %1</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="133"/>
      <location filename="../importworker.cpp" line="187"/>
      <source>Interrupted.</source>
      <comment>import process status update</comment>
      <translation>Yarıda kesildi.</translation>
    </message>
    <message>
      <location filename="../importworker.cpp" line="175"/>
      <source>Could not import data row number %1. The row was ignored. Problem details: %2</source>
      <translation type="unfinished">Could not import data row number %1. The row was ignored. Problem details: %2</translation>
    </message>
  </context>
  <context>
    <name>PluginManagerImpl</name>
    <message>
      <location filename="../services/impl/pluginmanagerimpl.cpp" line="546"/>
      <source>Cannot load plugin %1, because it&apos;s in conflict with plugin %2.</source>
      <translation type="unfinished">Cannot load plugin %1, because it&apos;s in conflict with plugin %2.</translation>
    </message>
    <message>
      <location filename="../services/impl/pluginmanagerimpl.cpp" line="557"/>
      <source>Cannot load plugin %1, because its dependency was not loaded: %2.</source>
      <translation type="unfinished">Cannot load plugin %1, because its dependency was not loaded: %2.</translation>
    </message>
    <message>
      <location filename="../services/impl/pluginmanagerimpl.cpp" line="566"/>
      <source>Cannot load plugin %1. Error details: %2</source>
      <translation type="unfinished">Cannot load plugin %1. Error details: %2</translation>
    </message>
    <message>
      <location filename="../services/impl/pluginmanagerimpl.cpp" line="582"/>
      <source>Cannot load plugin %1 (error while initializing plugin).</source>
      <translation type="unfinished">Cannot load plugin %1 (error while initializing plugin).</translation>
    </message>
    <message>
      <location filename="../services/impl/pluginmanagerimpl.cpp" line="743"/>
      <source>min: %1</source>
      <comment>plugin dependency version</comment>
      <translation>en az: %1</translation>
    </message>
    <message>
      <location filename="../services/impl/pluginmanagerimpl.cpp" line="744"/>
      <source>max: %1</source>
      <comment>plugin dependency version</comment>
      <translation>en fazla: %1</translation>
    </message>
  </context>
  <context>
    <name>PopulateConstant</name>
    <message>
      <location filename="../plugins/populateconstant.cpp" line="10"/>
      <source>Constant</source>
      <comment>populate constant plugin name</comment>
      <translation>Sabit</translation>
    </message>
  </context>
  <context>
    <name>PopulateConstantConfig</name>
    <message>
      <location filename="../plugins/populateconstant.ui" line="20"/>
      <source>Constant value:</source>
      <translation>Sabit değer:</translation>
    </message>
  </context>
  <context>
    <name>PopulateDictionary</name>
    <message>
      <location filename="../plugins/populatedictionary.cpp" line="16"/>
      <source>Dictionary</source>
      <comment>dictionary populating plugin name</comment>
      <translation>Sözlük</translation>
    </message>
  </context>
  <context>
    <name>PopulateDictionaryConfig</name>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="20"/>
      <source>Dictionary file</source>
      <translation>Kütüphane dosyası</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="29"/>
      <source>Pick dictionary file</source>
      <translation>Sözlük dosyası seç</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="39"/>
      <source>Word separator</source>
      <translation>Kelime ayracı</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="45"/>
      <source>Whitespace</source>
      <translation>Boşluk</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="58"/>
      <source>Line break</source>
      <translation>Satır sonu</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="74"/>
      <source>Method of using words</source>
      <translation type="unfinished">Method of using words</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="80"/>
      <source>Ordered</source>
      <translation>Sıralandı</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.ui" line="93"/>
      <source>Randomly</source>
      <translation>Rastgele</translation>
    </message>
  </context>
  <context>
    <name>PopulateManager</name>
    <message>
      <location filename="../services/populatemanager.cpp" line="89"/>
      <source>Table &apos;%1&apos; populated successfully.</source>
      <translation type="unfinished">Table &apos;%1&apos; populated successfully.</translation>
    </message>
  </context>
  <context>
    <name>PopulateRandom</name>
    <message>
      <location filename="../plugins/populaterandom.cpp" line="13"/>
      <source>Random number</source>
      <translation>Rasgele Numara</translation>
    </message>
  </context>
  <context>
    <name>PopulateRandomConfig</name>
    <message>
      <location filename="../plugins/populaterandom.ui" line="20"/>
      <source>Constant prefix</source>
      <translation type="unfinished">Constant prefix</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandom.ui" line="26"/>
      <source>No prefix</source>
      <translation>Ön Ek Yok</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandom.ui" line="39"/>
      <source>Minimum value</source>
      <translation>En düşük değer</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandom.ui" line="61"/>
      <source>Maximum value</source>
      <translation>En yüksek değer</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandom.ui" line="86"/>
      <source>Constant suffix</source>
      <translation type="unfinished">Constant suffix</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandom.ui" line="92"/>
      <source>No suffix</source>
      <translation>Son ek yok</translation>
    </message>
  </context>
  <context>
    <name>PopulateRandomText</name>
    <message>
      <location filename="../plugins/populaterandomtext.cpp" line="14"/>
      <source>Random text</source>
      <translation>Rastgele metin</translation>
    </message>
  </context>
  <context>
    <name>PopulateRandomTextConfig</name>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="20"/>
      <source>Use characters from common sets:</source>
      <translation type="unfinished">Use characters from common sets:</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="36"/>
      <source>Minimum length</source>
      <translation>En az uzunluk</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="64"/>
      <source>Letters from a to z.</source>
      <translation type="unfinished">Letters from a to z.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="67"/>
      <source>Alpha</source>
      <translation>Şefaflık</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="77"/>
      <source>Numbers from 0 to 9.</source>
      <translation>0&apos;dan 9&apos;a kadar sayılar.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="80"/>
      <source>Numeric</source>
      <translation>Sayısal</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="90"/>
      <source>A whitespace, a tab and a new line character.</source>
      <translation type="unfinished">A whitespace, a tab and a new line character.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="93"/>
      <source>Whitespace</source>
      <translation>Boşluk</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="103"/>
      <source>Includes all above and all others.</source>
      <translation type="unfinished">Includes all above and all others.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="106"/>
      <source>Binary</source>
      <translation>İkili (Binary)</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="119"/>
      <source>Use characters from my custom set:</source>
      <translation type="unfinished">Use characters from my custom set:</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="132"/>
      <source>Maximum length</source>
      <translation>En yüksek uzunluk</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.ui" line="160"/>
      <source>If you type some character multiple times, it&apos;s more likely to be used.</source>
      <translation type="unfinished">If you type some character multiple times, it&apos;s more likely to be used.</translation>
    </message>
  </context>
  <context>
    <name>PopulateScript</name>
    <message>
      <location filename="../plugins/populatescript.cpp" line="34"/>
      <source>Script</source>
      <translation>Komut dizini</translation>
    </message>
  </context>
  <context>
    <name>PopulateScriptConfig</name>
    <message>
      <location filename="../plugins/populatescript.ui" line="26"/>
      <source>Initialization code (optional)</source>
      <translation type="unfinished">Initialization code (optional)</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.ui" line="45"/>
      <source>Per step code</source>
      <translation type="unfinished">Per step code</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.ui" line="70"/>
      <source>Language</source>
      <translation>Dil</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.ui" line="89"/>
      <source>Help</source>
      <translation>Yardım</translation>
    </message>
  </context>
  <context>
    <name>PopulateSequence</name>
    <message>
      <location filename="../plugins/populatesequence.cpp" line="13"/>
      <source>Sequence</source>
      <translation>Sıra</translation>
    </message>
  </context>
  <context>
    <name>PopulateSequenceConfig</name>
    <message>
      <location filename="../plugins/populatesequence.ui" line="33"/>
      <source>Start value:</source>
      <translation>Başlangıç değeri:</translation>
    </message>
    <message>
      <location filename="../plugins/populatesequence.ui" line="56"/>
      <source>Step:</source>
      <translation>Adım:</translation>
    </message>
  </context>
  <context>
    <name>PopulateWorker</name>
    <message>
      <location filename="../populateworker.cpp" line="23"/>
      <source>Could not start transaction in order to perform table populating. Error details: %1</source>
      <translation type="unfinished">Could not start transaction in order to perform table populating. Error details: %1</translation>
    </message>
    <message>
      <location filename="../populateworker.cpp" line="69"/>
      <source>Error while populating table: %1</source>
      <translation type="unfinished">Error while populating table: %1</translation>
    </message>
    <message>
      <location filename="../populateworker.cpp" line="80"/>
      <source>Could not commit transaction after table populating. Error details: %1</source>
      <translation type="unfinished">Could not commit transaction after table populating. Error details: %1</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../common/utils.cpp" line="1028"/>
      <source>Could not open file &apos;%1&apos; for reading: %2</source>
      <translation type="unfinished">Could not open file &apos;%1&apos; for reading: %2</translation>
    </message>
    <message>
      <location filename="../db/abstractdb3.h" line="435"/>
      <source>Could not open database: %1</source>
      <translation>Veritabanı açılamadı: %1</translation>
    </message>
    <message>
      <location filename="../db/abstractdb3.h" line="1214"/>
      <source>Result set expired or no row available.</source>
      <translation type="unfinished">Result set expired or no row available.</translation>
    </message>
    <message>
      <location filename="../db/abstractdb3.h" line="331"/>
      <location filename="../db/abstractdb3.h" line="335"/>
      <source>Could not load extension %1: %2</source>
      <translation type="unfinished">Could not load extension %1: %2</translation>
    </message>
    <message>
      <location filename="../db/abstractdb3.h" line="421"/>
      <source>Could not run WAL checkpoint: %1</source>
      <translation type="unfinished">Could not run WAL checkpoint: %1</translation>
    </message>
    <message>
      <location filename="../db/abstractdb3.h" line="459"/>
      <source>Could not close database: %1</source>
      <translation type="unfinished">Could not close database: %1</translation>
    </message>
    <message>
      <location filename="../impl/dbattacherimpl.cpp" line="114"/>
      <source>Could not attach database %1: %2</source>
      <translation type="unfinished">Could not attach database %1: %2</translation>
    </message>
    <message>
      <location filename="../parser/parsercontext.cpp" line="108"/>
      <location filename="../parser/parsercontext.cpp" line="110"/>
      <source>Incomplete query.</source>
      <translation type="unfinished">Incomplete query.</translation>
    </message>
    <message>
      <location filename="../parser/sqlite3_parse.cpp" line="2526"/>
      <source>Parser stack overflow</source>
      <translation type="unfinished">Parser stack overflow</translation>
    </message>
    <message>
      <location filename="../parser/sqlite3_parse.cpp" line="5937"/>
      <source>Syntax error</source>
      <translation>Sözdizimi hatası</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.cpp" line="31"/>
      <source>Could not open dictionary file %1 for reading.</source>
      <translation type="unfinished">Could not open dictionary file %1 for reading.</translation>
    </message>
    <message>
      <location filename="../plugins/populatedictionary.cpp" line="92"/>
      <source>Dictionary file must exist and be readable.</source>
      <translation type="unfinished">Dictionary file must exist and be readable.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandom.cpp" line="54"/>
      <source>Maximum value cannot be less than minimum value.</source>
      <translation type="unfinished">Maximum value cannot be less than minimum value.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.cpp" line="79"/>
      <source>Maximum length cannot be less than minimum length.</source>
      <translation type="unfinished">Maximum length cannot be less than minimum length.</translation>
    </message>
    <message>
      <location filename="../plugins/populaterandomtext.cpp" line="90"/>
      <source>Custom character set cannot be empty.</source>
      <translation type="unfinished">Custom character set cannot be empty.</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.cpp" line="61"/>
      <source>Could not find plugin to support scripting language: %1</source>
      <translation type="unfinished">Could not find plugin to support scripting language: %1</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.cpp" line="79"/>
      <source>Error while executing populating initial code: %1</source>
      <translation type="unfinished">Error while executing populating initial code: %1</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.cpp" line="101"/>
      <source>Error while executing populating code: %1</source>
      <translation type="unfinished">Error while executing populating code: %1</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.cpp" line="133"/>
      <source>Select implementation language.</source>
      <translation type="unfinished">Select implementation language.</translation>
    </message>
    <message>
      <location filename="../plugins/populatescript.cpp" line="134"/>
      <source>Implementation code cannot be empty.</source>
      <translation type="unfinished">Implementation code cannot be empty.</translation>
    </message>
    <message>
      <location filename="../selectresolver.cpp" line="369"/>
      <source>Could not resolve data source for column: %1</source>
      <translation type="unfinished">Could not resolve data source for column: %1</translation>
    </message>
    <message>
      <location filename="../selectresolver.cpp" line="439"/>
      <source>Could not resolve table for column &apos;%1&apos;.</source>
      <translation type="unfinished">Could not resolve table for column &apos;%1&apos;.</translation>
    </message>
    <message>
      <location filename="../services/impl/configimpl.cpp" line="747"/>
      <source>Could not initialize configuration file. Any configuration changes and queries history will be lost after application restart. Unable to create a file at following locations: %1.</source>
      <translation type="unfinished">Could not initialize configuration file. Any configuration changes and queries history will be lost after application restart. Unable to create a file at following locations: %1.</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="347"/>
      <source>General purpose</source>
      <comment>plugin category name</comment>
      <translation>Genel amaçlı</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="348"/>
      <source>Database support</source>
      <comment>plugin category name</comment>
      <translation>Veritabanı desteği</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="349"/>
      <source>Code formatter</source>
      <comment>plugin category name</comment>
      <translation>Kod biçimleyici</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="350"/>
      <source>Scripting languages</source>
      <comment>plugin category name</comment>
      <translation>Betik dilleri</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="351"/>
      <source>Exporting</source>
      <comment>plugin category name</comment>
      <translation>Dışa aktarılıyor</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="352"/>
      <source>Importing</source>
      <comment>plugin category name</comment>
      <translation>İçeri aktarılıyor</translation>
    </message>
    <message>
      <location filename="../sqlitestudio.cpp" line="353"/>
      <source>Table populating</source>
      <comment>plugin category name</comment>
      <translation>Tablo doldurma</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="121"/>
      <source>Table %1 is referencing table %2, but the foreign key definition will not be updated for new table definition due to problems while parsing DDL of the table %3.</source>
      <translation type="unfinished">Table %1 is referencing table %2, but the foreign key definition will not be updated for new table definition due to problems while parsing DDL of the table %3.</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="470"/>
      <source>All columns indexed by the index %1 are gone. The index will not be recreated after table modification.</source>
      <translation type="unfinished">All columns indexed by the index %1 are gone. The index will not be recreated after table modification.</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="514"/>
      <source>There is problem with proper processing trigger %1. It may be not fully updated afterwards and will need your attention.</source>
      <translation type="unfinished">There is problem with proper processing trigger %1. It may be not fully updated afterwards and will need your attention.</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="529"/>
      <source>All columns covered by the trigger %1 are gone. The trigger will not be recreated after table modification.</source>
      <translation type="unfinished">All columns covered by the trigger %1 are gone. The trigger will not be recreated after table modification.</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="561"/>
      <source>Cannot not update trigger %1 according to table %2 modification.</source>
      <translation type="unfinished">Cannot not update trigger %1 according to table %2 modification.</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="580"/>
      <source>Cannot not update view %1 according to table %2 modifications.
The view will remain as it is.</source>
      <translation type="unfinished">Cannot not update view %1 according to table %2 modifications.
The view will remain as it is.</translation>
    </message>
    <message>
      <location filename="../tablemodifier.cpp" line="742"/>
      <location filename="../tablemodifier.cpp" line="766"/>
      <location filename="../tablemodifier.cpp" line="785"/>
      <source>There is a problem with updating an %1 statement within %2 trigger. One of the %1 substatements which might be referring to table %3 cannot be properly modified. Manual update of the trigger may be necessary.</source>
      <translation type="unfinished">There is a problem with updating an %1 statement within %2 trigger. One of the %1 substatements which might be referring to table %3 cannot be properly modified. Manual update of the trigger may be necessary.</translation>
    </message>
    <message>
      <location filename="../viewmodifier.cpp" line="24"/>
      <source>Could not parse DDL of the view to be created. Details: %1</source>
      <translation type="unfinished">Could not parse DDL of the view to be created. Details: %1</translation>
    </message>
    <message>
      <location filename="../viewmodifier.cpp" line="33"/>
      <source>Parsed query is not CREATE VIEW. It&apos;s: %1</source>
      <translation type="unfinished">Parsed query is not CREATE VIEW. It&apos;s: %1</translation>
    </message>
    <message>
      <location filename="../viewmodifier.cpp" line="81"/>
      <source>SQLiteStudio was unable to resolve columns returned by the new view, therefore it won&apos;t be able to tell which triggers might fail during the recreation process.</source>
      <translation type="unfinished">SQLiteStudio was unable to resolve columns returned by the new view, therefore it won&apos;t be able to tell which triggers might fail during the recreation process.</translation>
    </message>
  </context>
  <context>
    <name>QueryExecutor</name>
    <message>
      <location filename="../db/queryexecutor.cpp" line="194"/>
      <source>Execution interrupted.</source>
      <translation type="unfinished">Execution interrupted.</translation>
    </message>
    <message>
      <location filename="../db/queryexecutor.cpp" line="235"/>
      <source>Database is not open.</source>
      <translation>Veritabanı açık değil.</translation>
    </message>
    <message>
      <location filename="../db/queryexecutor.cpp" line="243"/>
      <source>Only one query can be executed simultaneously.</source>
      <translation type="unfinished">Only one query can be executed simultaneously.</translation>
    </message>
    <message>
      <location filename="../db/queryexecutor.cpp" line="347"/>
      <location filename="../db/queryexecutor.cpp" line="596"/>
      <source>An error occured while executing the count(*) query, thus data paging will be disabled. Error details from the database: %1</source>
      <translation type="unfinished">An error occured while executing the count(*) query, thus data paging will be disabled. Error details from the database: %1</translation>
    </message>
    <message>
      <location filename="../db/queryexecutor.cpp" line="507"/>
      <source>SQLiteStudio was unable to extract metadata from the query. Results won&apos;t be editable.</source>
      <translation type="unfinished">SQLiteStudio was unable to extract metadata from the query. Results won&apos;t be editable.</translation>
    </message>
  </context>
  <context>
    <name>ScriptingQtDbProxy</name>
    <message>
      <location filename="../plugins/scriptingqtdbproxy.cpp" line="48"/>
      <source>No database available in current context, while called JavaScript&apos;s %1 command.</source>
      <translation type="unfinished">No database available in current context, while called JavaScript&apos;s %1 command.</translation>
    </message>
    <message>
      <location filename="../plugins/scriptingqtdbproxy.cpp" line="65"/>
      <source>Error from %1: %2</source>
      <translation>Hata %1 den %2</translation>
    </message>
  </context>
  <context>
    <name>SqlFileExecutor</name>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="50"/>
      <source>Could not execute SQL, because application has failed to start transaction: %1</source>
      <translation type="unfinished">Could not execute SQL, because application has failed to start transaction: %1</translation>
    </message>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="81"/>
      <source>Execution from file cancelled. Any queries executed so far have been rolled back.</source>
      <translation type="unfinished">Execution from file cancelled. Any queries executed so far have been rolled back.</translation>
    </message>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="97"/>
      <source>Could not open file &apos;%1&apos; for reading: %2</source>
      <translation type="unfinished">Could not open file &apos;%1&apos; for reading: %2</translation>
    </message>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="142"/>
      <source>Could not execute SQL, because application has failed to commit the transaction: %1</source>
      <translation type="unfinished">Could not execute SQL, because application has failed to commit the transaction: %1</translation>
    </message>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="147"/>
      <source>Finished executing %1 queries in %2 seconds. %3 were not executed due to errors.</source>
      <translation type="unfinished">Finished executing %1 queries in %2 seconds. %3 were not executed due to errors.</translation>
    </message>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="153"/>
      <source>Finished executing %1 queries in %2 seconds.</source>
      <translation type="unfinished">Finished executing %1 queries in %2 seconds.</translation>
    </message>
    <message>
      <location filename="../sqlfileexecutor.cpp" line="160"/>
      <source>Could not execute SQL due to error.</source>
      <translation type="unfinished">Could not execute SQL due to error.</translation>
    </message>
  </context>
  <context>
    <name>SqlHistoryModel</name>
    <message>
      <location filename="../sqlhistorymodel.cpp" line="32"/>
      <source>Database</source>
      <comment>sql history header</comment>
      <translation>Veritabanı</translation>
    </message>
    <message>
      <location filename="../sqlhistorymodel.cpp" line="34"/>
      <source>Execution date</source>
      <comment>sql history header</comment>
      <translation>Yürütme tarihi</translation>
    </message>
    <message>
      <location filename="../sqlhistorymodel.cpp" line="36"/>
      <source>Time spent</source>
      <comment>sql history header</comment>
      <translation>Harcanan zaman</translation>
    </message>
    <message>
      <location filename="../sqlhistorymodel.cpp" line="38"/>
      <source>Rows affected</source>
      <comment>sql history header</comment>
      <translation>Etkilenen satırlar</translation>
    </message>
    <message>
      <location filename="../sqlhistorymodel.cpp" line="40"/>
      <source>SQL</source>
      <comment>sql history header</comment>
      <translation>SQL</translation>
    </message>
  </context>
  <context>
    <name>UpdateManager</name>
    <message>
      <location filename="../services/updatemanager.cpp" line="92"/>
      <source>Could not check for updates (%1).</source>
      <translation>Güncelleştirmeler kontrol edilemedi (%1).</translation>
    </message>
  </context>
</TS>
