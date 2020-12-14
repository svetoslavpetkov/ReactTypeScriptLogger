import { IIssue, IssueStatus, IUser, UserRole } from "./abstraction"

const ADMIN = "admin"
const USER = "user"

const issues = [
  {
    "id": "e7d1e39f-a054-4bcb-9b3e-97ab642dc0b7",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with minim sint",
    "description": "Here are the detials: $Magna sunt officia sint do. Eu fugiat cillum commodo incididunt voluptate dolor cupidatat duis minim. Voluptate ea magna mollit consectetur cillum ad sit consequat eu. Quis ullamco proident labore elit ex do ea.",
    "creator": "user",
    "createdDate": "Fri Sep 29 2006 16:02:36 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "35e67aba-30d2-43e1-960e-e80f1c4ebffb",
        "creator": "admin",
        "createdDate": "Mon Oct 06 1997 03:57:31 GMT+0000 (UTC)",
        "text": "Aute ut deserunt veniam laborum occaecat officia amet exercitation ea est Lorem aliqua. Excepteur amet culpa sunt velit. Fugiat deserunt aliqua consectetur excepteur ipsum. Quis exercitation non mollit proident Lorem ad magna aliqua amet aliqua Lorem ipsum quis. Esse nisi laborum et cillum nostrud. Irure sint labore occaecat aliqua excepteur do culpa."
      },
      {
        "id": "fed44849-0baa-49a7-b77d-c3108dd26dfc",
        "creator": "user",
        "createdDate": "Fri Feb 25 2011 09:52:01 GMT+0000 (UTC)",
        "text": "In ad mollit et cillum reprehenderit fugiat proident pariatur labore laborum tempor ea tempor. Ipsum sit reprehenderit eu qui tempor eiusmod in tempor magna et culpa consequat magna. Exercitation voluptate ea non veniam duis dolor reprehenderit proident. Ipsum non fugiat elit velit non laborum nulla mollit officia eu deserunt nulla irure. Ex nisi reprehenderit mollit quis ullamco officia cillum nostrud. Consectetur laboris eu ipsum elit nulla amet."
      }
    ]
  },
  {
    "id": "cd232fea-b612-4a63-9d30-955c5bd8618a",
    "status": IssueStatus.WontFix,
    "responsible": "admin",
    "title": "I have issue with commodo dolor",
    "description": "Here are the detials: $Commodo cupidatat enim aliquip ut est anim proident deserunt enim et id esse culpa dolor. Magna deserunt consequat ex in voluptate consequat. Cillum anim proident minim esse laborum quis nulla. Id laborum qui laborum irure excepteur sit ullamco ullamco non commodo minim deserunt proident occaecat.",
    "creator": "user",
    "createdDate": "Fri May 14 1971 08:08:54 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "e2f8b8ca-4417-4745-a1b4-d126ea647deb",
        "creator": "admin",
        "createdDate": "Sat Oct 29 1977 20:14:19 GMT+0000 (UTC)",
        "text": "Deserunt non proident proident non exercitation adipisicing laboris qui ea labore. Mollit commodo officia aute nulla cillum aute ullamco. Velit voluptate anim aute eu amet qui nulla. Cillum elit deserunt mollit incididunt commodo officia. Irure cillum eiusmod sunt dolor exercitation ex incididunt excepteur pariatur excepteur labore aliquip consequat. Duis eiusmod sint nulla culpa labore cillum ea cupidatat laboris nisi proident irure."
      },
      {
        "id": "5592ca6f-da2c-4ef9-aba6-fad04b6b7e4a",
        "creator": "admin",
        "createdDate": "Thu Nov 17 2005 22:56:36 GMT+0000 (UTC)",
        "text": "Laboris occaecat et voluptate consequat enim. Tempor sint deserunt in sint consequat mollit proident. Est do dolor quis veniam ipsum. Aute occaecat duis consequat dolor ipsum deserunt ex duis eu irure anim incididunt. Et veniam eiusmod ea aliquip ea. Voluptate velit laboris laborum exercitation eu magna in."
      },
      {
        "id": "48898701-bb54-403e-bf9d-b849f78f4553",
        "creator": "admin",
        "createdDate": "Tue May 03 1977 14:03:36 GMT+0000 (UTC)",
        "text": "Duis sit anim commodo est ea cupidatat. Culpa esse ullamco enim officia proident veniam aute ut cupidatat esse dolore exercitation sint do. Ut enim elit sunt labore. Sint dolore voluptate cillum incididunt culpa ex eiusmod sunt fugiat. Culpa veniam cillum amet veniam consectetur cillum commodo. Eu esse sunt laboris sunt laboris cillum dolore nulla ex eiusmod ullamco cillum."
      },
      {
        "id": "da6460ed-4c00-46ea-9b53-407cd2c73287",
        "creator": "admin",
        "createdDate": "Thu Feb 07 2019 00:25:00 GMT+0000 (UTC)",
        "text": "Incididunt id sunt proident tempor fugiat elit. Occaecat dolor exercitation excepteur nisi esse ea culpa deserunt aliquip nisi anim enim. Id laborum excepteur velit do quis velit adipisicing non ex do nostrud consectetur. Velit cillum sunt nulla ut consectetur ea. Adipisicing irure commodo sit qui duis laborum. Pariatur culpa consectetur ea eiusmod ullamco nostrud tempor labore est Lorem eiusmod et commodo in."
      }
    ]
  },
  {
    "id": "b753a816-a47e-433d-81ef-876b722768bc",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with proident veniam",
    "description": "Here are the detials: $Est ut aute minim tempor pariatur labore minim incididunt laborum quis. Est occaecat tempor veniam minim occaecat eu dolore voluptate dolor ullamco id consequat exercitation in. Aliqua veniam laborum deserunt dolor. Sit laborum laborum deserunt reprehenderit tempor pariatur veniam esse.",
    "creator": "user",
    "createdDate": "Mon Feb 01 1982 08:36:55 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "b612fff0-d3d4-4a71-b3e5-108f27c4623d",
        "creator": "user",
        "createdDate": "Thu Aug 05 2010 03:47:01 GMT+0000 (UTC)",
        "text": "Nulla mollit fugiat do esse. Anim culpa enim amet exercitation do nulla officia eiusmod nisi minim. Qui velit eu ea ullamco. In deserunt reprehenderit ea amet nisi commodo enim reprehenderit id do fugiat commodo cupidatat. Ad amet reprehenderit consequat labore laborum id cillum aliqua. Cupidatat aliqua quis Lorem fugiat ipsum adipisicing aliqua dolore magna velit consectetur consectetur pariatur."
      },
      {
        "id": "955c08b9-b2f2-4d95-9375-7d89cd7c4a66",
        "creator": "user",
        "createdDate": "Thu Nov 27 1986 04:30:27 GMT+0000 (UTC)",
        "text": "Ea id do dolore enim. Tempor cupidatat duis non culpa laborum nulla eiusmod voluptate aute. Pariatur duis ut Lorem minim consequat et fugiat culpa. Tempor cupidatat aliqua ex ut magna irure sint quis incididunt nulla. Quis ea reprehenderit mollit excepteur in amet incididunt eiusmod officia pariatur magna nulla pariatur. Aliquip veniam occaecat enim esse reprehenderit nisi non minim nostrud nulla et sunt commodo."
      }
    ]
  },
  {
    "id": "cd25fcc3-c631-4850-9e25-8a7eccac67a7",
    "status": IssueStatus.Fixed,
    "responsible": "admin",
    "title": "I have issue with non sit",
    "description": "Here are the detials: $Cillum culpa nostrud mollit ipsum enim dolore exercitation eu cupidatat enim cupidatat consequat. Ut exercitation ex non anim occaecat. Ea ipsum Lorem non ex voluptate cupidatat cillum laboris laboris. In commodo commodo irure culpa aliqua excepteur.",
    "creator": "user",
    "createdDate": "Tue Feb 04 2020 04:11:40 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "ef7e921f-b1ea-4014-8775-fe1a321a71a4",
        "creator": "admin",
        "createdDate": "Mon May 20 2019 21:44:29 GMT+0000 (UTC)",
        "text": "Anim ullamco veniam aute irure proident elit pariatur ea aliquip ex. Elit ut dolore enim ut occaecat ad aliqua qui id amet adipisicing ex. Ullamco mollit laboris culpa aliqua qui pariatur. Exercitation commodo officia ex nulla est sunt Lorem do eu laborum nisi duis. Minim aute adipisicing mollit eu fugiat elit exercitation cupidatat. Do irure magna aliquip commodo eu ipsum consectetur esse."
      },
      {
        "id": "9006d376-9e61-4ff2-a55a-7239d7b65fb1",
        "creator": "user",
        "createdDate": "Sun Apr 14 2013 19:09:08 GMT+0000 (UTC)",
        "text": "Nisi id magna officia fugiat eiusmod esse. Sit magna ut commodo ut. Irure deserunt minim ipsum enim non cillum est officia ullamco exercitation commodo nulla. Aliquip excepteur dolore nulla exercitation culpa sint. Irure veniam in in velit et. Deserunt sit mollit incididunt aliquip amet voluptate mollit eu aliqua quis enim."
      }
    ]
  },
  {
    "id": "34218401-2058-479e-8f05-cd2112bb2306",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with reprehenderit in",
    "description": "Here are the detials: $Cupidatat ex exercitation est proident reprehenderit deserunt proident eu enim adipisicing. Do ea Lorem est eu. Mollit cupidatat qui nostrud eiusmod velit sit ullamco reprehenderit officia. Ut adipisicing anim commodo cillum cillum commodo sunt.",
    "creator": "user",
    "createdDate": "Thu Jul 01 2004 00:58:53 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "d32437a7-1784-45bc-8ad4-81984bae9307",
        "creator": "admin",
        "createdDate": "Tue Jan 12 2010 10:57:03 GMT+0000 (UTC)",
        "text": "Sunt excepteur consequat commodo in ad elit. Commodo deserunt ut id reprehenderit ea. Dolor do in consequat nulla excepteur. Lorem ea aute id Lorem dolor irure. Ipsum magna ad eiusmod aliqua ea qui fugiat ex labore esse consectetur. Anim reprehenderit amet velit anim commodo voluptate dolor velit irure commodo nostrud ex nostrud."
      },
      {
        "id": "3ecf3d37-6152-4163-95e5-b8d04f4feb84",
        "creator": "user",
        "createdDate": "Thu Oct 19 1989 04:15:14 GMT+0000 (UTC)",
        "text": "Aliqua culpa aliqua labore ea consectetur excepteur duis sint proident culpa veniam. Labore exercitation occaecat minim dolore exercitation. Amet cillum Lorem velit ea id enim elit magna excepteur dolor nisi consectetur officia. Enim ea proident in id eu velit veniam culpa culpa consequat. Tempor voluptate amet eu non deserunt non nisi occaecat nisi sit. Et mollit esse aliquip ut laborum cupidatat non exercitation."
      },
      {
        "id": "2b157be5-66ab-41f1-928c-f2a4de42801b",
        "creator": "admin",
        "createdDate": "Wed Dec 07 1988 14:47:34 GMT+0000 (UTC)",
        "text": "Ex aliqua eu deserunt elit aute amet culpa magna occaecat aute incididunt. Sint Lorem tempor ut culpa ea dolore elit officia quis Lorem eiusmod in. Dolor est voluptate cupidatat nostrud. Id culpa cillum laboris velit aliqua eu tempor ipsum cillum. Nisi occaecat commodo in cillum excepteur commodo consequat. Laborum nisi cillum aliqua deserunt laborum consectetur minim amet."
      },
      {
        "id": "212bfd1b-f113-4ab7-9a92-f1ba176174c4",
        "creator": "user",
        "createdDate": "Sun Feb 20 1994 02:39:35 GMT+0000 (UTC)",
        "text": "Duis labore minim labore exercitation exercitation non culpa minim non. Ad laborum ad qui qui elit ipsum veniam dolor occaecat veniam anim laboris consectetur. Mollit commodo laboris eu enim voluptate. Mollit in ipsum cupidatat minim ipsum aute velit et. Ex aliquip sint dolore fugiat amet deserunt esse pariatur. Magna pariatur sint excepteur exercitation ipsum dolore est."
      },
      {
        "id": "fdd29afe-fb83-4abf-9094-983eefb416ba",
        "creator": "admin",
        "createdDate": "Mon Jun 10 2002 12:56:58 GMT+0000 (UTC)",
        "text": "Dolor laborum veniam sit exercitation ad ut velit pariatur Lorem in voluptate reprehenderit tempor. Nostrud consequat sunt consectetur minim cillum voluptate proident. Pariatur esse aute ut elit commodo laborum ut consectetur. Laboris in enim officia reprehenderit tempor commodo cupidatat anim occaecat. Aliquip duis culpa laborum nisi cupidatat veniam. Eiusmod consequat aliqua excepteur fugiat deserunt pariatur consectetur qui tempor nisi officia est."
      }
    ]
  },
  {
    "id": "e6cce9db-92de-4702-8064-0c832c4e2262",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with reprehenderit qui",
    "description": "Here are the detials: $Lorem do et incididunt dolore nisi tempor. Culpa non tempor fugiat id nisi aliqua Lorem aliquip do sit nisi dolore. Ea aliquip velit enim consectetur. Anim voluptate ea minim tempor qui ex consectetur cillum.",
    "creator": "user",
    "createdDate": "Mon Dec 15 1975 09:13:13 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "8dbb9dc0-fd2c-4f65-8786-da5254968c4b",
        "creator": "user",
        "createdDate": "Tue Oct 08 2013 07:32:51 GMT+0000 (UTC)",
        "text": "Fugiat est amet sunt excepteur in tempor id eiusmod. Ad enim sunt magna nulla occaecat nisi consectetur duis et aliqua sunt exercitation dolore ipsum. Reprehenderit dolor qui dolor magna. Est do aliquip ut dolor qui elit. Dolor ut incididunt irure amet sint mollit ullamco mollit sit dolore est. Incididunt aliqua exercitation dolore reprehenderit."
      },
      {
        "id": "094661c2-58ff-48d2-9815-00db2a52c9b3",
        "creator": "admin",
        "createdDate": "Fri Jan 11 1991 22:03:14 GMT+0000 (UTC)",
        "text": "Eu id exercitation mollit consequat cillum non officia quis magna Lorem. Eu consequat ea cupidatat nisi non. Quis sunt dolor do qui labore est. Exercitation laboris pariatur quis anim culpa consequat sint elit veniam. Sint voluptate commodo nostrud eu. Est deserunt sint Lorem ullamco dolore consectetur consequat commodo nulla."
      },
      {
        "id": "6425d81c-1373-497f-855a-8c3425899299",
        "creator": "user",
        "createdDate": "Mon Feb 10 2014 10:15:28 GMT+0000 (UTC)",
        "text": "Sunt sint qui nisi excepteur ipsum reprehenderit consequat. Laborum sint ad tempor reprehenderit consequat sit aliquip labore. Reprehenderit ea duis in eu pariatur adipisicing adipisicing ea proident officia non sint amet ipsum. Quis dolore incididunt cillum incididunt. Commodo ex cillum reprehenderit pariatur pariatur officia. Qui deserunt aliqua exercitation velit aliquip tempor."
      },
      {
        "id": "6cf402fd-266f-4f7a-85a6-b703fba1826c",
        "creator": "user",
        "createdDate": "Fri Jul 19 2002 09:45:26 GMT+0000 (UTC)",
        "text": "Occaecat est consectetur nostrud consectetur aute magna aliquip. Ex tempor et aliqua pariatur Lorem amet nostrud ea velit mollit consequat adipisicing ea ullamco. Eu aliquip elit commodo reprehenderit tempor nisi enim adipisicing dolor magna. Proident qui nisi Lorem proident aliquip velit ad. Commodo eiusmod ea est consequat anim et dolore duis eiusmod. Anim consectetur nisi pariatur dolor elit."
      }
    ]
  },
  {
    "id": "19b9e678-5fff-4755-9964-1d7121963a07",
    "status": IssueStatus.WontFix,
    "responsible": "admin",
    "title": "I have issue with occaecat amet",
    "description": "Here are the detials: $Exercitation consequat id occaecat anim duis occaecat do aliquip nulla anim Lorem nulla est tempor. Excepteur labore nisi non dolor in sunt consectetur consequat ut. Adipisicing ex cillum enim elit cillum sit. Nisi velit labore irure consectetur laborum cupidatat.",
    "creator": "user",
    "createdDate": "Thu Sep 11 1980 20:55:35 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "cbc4118b-c73b-4266-815b-13d6f1e7bfc8",
        "creator": "admin",
        "createdDate": "Wed May 13 1970 12:59:00 GMT+0000 (UTC)",
        "text": "Exercitation aliqua nisi amet aliquip veniam ut enim excepteur laboris ad. Quis culpa excepteur sit irure excepteur exercitation anim officia sit consequat elit pariatur do voluptate. Ipsum dolore eiusmod eiusmod nulla elit. Quis cillum exercitation magna quis culpa dolor in do culpa laboris cillum elit dolore id. Labore ea mollit qui laboris laboris ex. Ullamco do qui pariatur sint aute sit duis."
      }
    ]
  },
  {
    "id": "28b7d484-a2fb-496f-bffe-037f46129223",
    "status": IssueStatus.WontFix,
    "responsible": "admin",
    "title": "I have issue with dolore cillum",
    "description": "Here are the detials: $Cupidatat non nisi anim esse eiusmod eiusmod elit esse consequat esse consequat commodo incididunt. Amet amet ea proident cupidatat quis deserunt officia tempor nisi reprehenderit sint labore. Exercitation irure incididunt sint culpa aliquip ipsum elit laboris dolore exercitation. Laborum dolore commodo quis consectetur tempor aliquip proident ullamco in ea nostrud.",
    "creator": "user",
    "createdDate": "Wed Oct 22 1997 04:24:41 GMT+0000 (UTC)",
    "comments": []
  },
  {
    "id": "4cd548a4-104d-4756-bf0e-9727dfc3d4fb",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with dolor incididunt",
    "description": "Here are the detials: $Aute voluptate Lorem id dolore dolor duis do enim pariatur Lorem fugiat. Tempor ad proident dolor consectetur adipisicing amet anim irure officia mollit. Non proident Lorem voluptate velit laboris cillum magna. Aliquip cupidatat sunt officia minim enim.",
    "creator": "user",
    "createdDate": "Tue Oct 01 1974 11:44:46 GMT+0000 (UTC)",
    "comments": []
  },
  {
    "id": "982a4ce2-10da-4f67-bc5c-eacc6fbf3154",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with culpa voluptate",
    "description": "Here are the detials: $Deserunt nulla do commodo do. Et ex duis deserunt non fugiat cillum sint exercitation commodo quis. Fugiat qui cupidatat voluptate veniam voluptate eiusmod id reprehenderit non mollit aliqua nisi aliqua. Non in id aliquip qui do consectetur ipsum labore id amet esse cupidatat.",
    "creator": "user",
    "createdDate": "Sat Sep 06 1986 10:33:21 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "47b67311-0af0-41f7-a8c8-94089f90f90d",
        "creator": "admin",
        "createdDate": "Wed May 08 2019 23:47:35 GMT+0000 (UTC)",
        "text": "Exercitation sunt irure nulla sunt nisi veniam sint. Pariatur aliquip reprehenderit elit dolore officia anim eiusmod culpa consectetur fugiat duis veniam. Elit dolor proident aute culpa quis eiusmod et sunt culpa Lorem proident elit officia consectetur. Exercitation do exercitation in minim commodo Lorem aute laborum cupidatat consequat esse culpa velit ipsum. Qui elit occaecat consectetur consectetur velit nostrud adipisicing amet pariatur elit mollit excepteur magna. Est cupidatat voluptate commodo nisi in ullamco culpa sunt."
      },
      {
        "id": "ccdb18e7-34a0-4162-a3db-621d77e80a86",
        "creator": "user",
        "createdDate": "Mon Jul 12 1982 07:13:12 GMT+0000 (UTC)",
        "text": "Enim deserunt exercitation aliquip in laboris dolore sit quis esse elit excepteur magna fugiat dolore. Nulla proident exercitation elit consectetur non. Proident reprehenderit in eiusmod pariatur incididunt ipsum eu et. Excepteur exercitation sint deserunt non sint. Aute irure quis labore laboris fugiat et et esse duis quis cillum. Pariatur aute voluptate nisi nulla veniam laborum Lorem commodo exercitation ullamco."
      },
      {
        "id": "8b49c505-30f8-45fc-a800-2584869a8d67",
        "creator": "user",
        "createdDate": "Thu Jan 01 1970 19:05:12 GMT+0000 (UTC)",
        "text": "Dolor ad ex non sunt aliqua veniam. Officia esse eu sunt id quis. Nostrud officia anim pariatur cillum cupidatat esse do esse exercitation non. Laborum id nulla tempor laboris id pariatur qui ea aliquip culpa. Cupidatat qui nisi mollit eu eu eu pariatur excepteur sunt ullamco ipsum. Amet nostrud laborum veniam aliquip."
      },
      {
        "id": "bad3dad7-86c7-4d31-81a3-c47eafc143bc",
        "creator": "user",
        "createdDate": "Fri Dec 06 1974 22:17:28 GMT+0000 (UTC)",
        "text": "Deserunt ad ex nisi adipisicing culpa esse incididunt labore dolore quis ipsum. Dolor aliquip labore non laboris consequat qui est nulla fugiat exercitation do occaecat. Nisi minim laborum mollit est officia in commodo. Do sunt non est velit sunt tempor sunt esse. Anim ex sunt aliquip proident amet in cillum aute esse sit Lorem ex id. Occaecat eiusmod eu id consectetur magna et sint labore aute incididunt nisi adipisicing ex."
      },
      {
        "id": "20d38e4d-0d3a-4f92-9254-496630d7bde7",
        "creator": "user",
        "createdDate": "Tue Nov 27 2018 16:07:53 GMT+0000 (UTC)",
        "text": "Incididunt ut ad anim labore mollit labore cupidatat minim. Ex est eiusmod magna id voluptate excepteur. Proident non aliqua veniam Lorem ullamco consectetur laboris minim fugiat dolore eu ut in. Deserunt Lorem ipsum cillum cupidatat eu duis ipsum anim ad adipisicing occaecat laboris. Est ut culpa ex nisi quis dolore esse sit nulla fugiat ipsum excepteur est. Veniam culpa enim laboris qui."
      }
    ]
  },
  {
    "id": "c504f067-c198-43a2-850f-bad3435eca0b",
    "status": IssueStatus.New,
    "responsible": "admin",
    "title": "I have issue with exercitation aliquip",
    "description": "Here are the detials: $Sunt sint laborum reprehenderit sit ex mollit ex exercitation veniam ea aliquip voluptate ullamco voluptate. Cupidatat in sit exercitation anim nostrud exercitation est sint. Lorem exercitation aliquip adipisicing deserunt Lorem aliqua est voluptate officia laboris tempor dolor ullamco. Reprehenderit ut ex minim consequat ea amet eiusmod mollit Lorem aliqua eu proident quis adipisicing.",
    "creator": "user",
    "createdDate": "Mon Dec 14 1981 16:47:46 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "69e4ed09-9a9a-4cd5-92ad-76408e56987d",
        "creator": "user",
        "createdDate": "Mon Apr 16 2001 21:09:48 GMT+0000 (UTC)",
        "text": "Esse cupidatat amet sit laboris et do cillum cillum est. Duis laboris cupidatat in duis qui est eu ullamco et. Ipsum ipsum amet ut adipisicing eiusmod quis sunt enim enim adipisicing ea qui id anim. Id aute in voluptate non reprehenderit aliqua adipisicing sit sit. Ut dolore ullamco pariatur et adipisicing tempor quis cillum mollit aute commodo. Eu esse nostrud tempor amet laborum."
      },
      {
        "id": "98ce2681-113c-4204-a677-474ccf9fee4e",
        "creator": "user",
        "createdDate": "Sat Mar 06 1971 10:57:49 GMT+0000 (UTC)",
        "text": "Eu exercitation non consectetur excepteur ad duis ea est in ipsum. Dolore ut fugiat amet mollit cillum ipsum et do ea amet velit eiusmod. Eiusmod nostrud aliqua ullamco ea dolor. Lorem veniam ullamco irure irure officia reprehenderit deserunt reprehenderit deserunt tempor. Eiusmod ea cillum amet consectetur velit velit consequat. Qui dolore irure ullamco ipsum elit dolor eiusmod commodo cillum exercitation aliqua id voluptate proident."
      },
      {
        "id": "bd981098-184e-4b16-86f5-ddc73f42a7cb",
        "creator": "user",
        "createdDate": "Mon Jan 14 2019 02:33:37 GMT+0000 (UTC)",
        "text": "Velit qui commodo incididunt ullamco sint ullamco ullamco aute mollit elit magna ullamco voluptate do. Ea cillum nostrud mollit proident sint mollit elit ullamco aliqua commodo excepteur. Officia mollit excepteur duis proident nulla sint cillum dolore ullamco. Lorem velit exercitation aliqua pariatur mollit aute laborum Lorem qui aliqua et magna. Magna aliqua elit cillum culpa ipsum commodo sit deserunt dolore nisi laboris. Magna sit voluptate reprehenderit excepteur ex pariatur."
      },
      {
        "id": "39990d82-fab9-493c-85e3-c2796c82b01d",
        "creator": "admin",
        "createdDate": "Fri May 28 1999 10:13:42 GMT+0000 (UTC)",
        "text": "Fugiat ea est occaecat in. Quis velit in officia aliqua fugiat cillum minim deserunt labore anim id adipisicing sunt labore. Incididunt non proident duis id ut eu cupidatat. Irure consequat eu voluptate quis eiusmod incididunt id. Lorem est do ullamco minim occaecat ut ipsum et elit anim aute sit aute. Occaecat id non enim consectetur mollit duis reprehenderit amet nisi id labore ipsum nostrud."
      },
      {
        "id": "9108e9b0-5017-4485-b6bb-7e71e1a95f47",
        "creator": "admin",
        "createdDate": "Sat Oct 16 1999 20:18:34 GMT+0000 (UTC)",
        "text": "Consectetur cillum elit laboris tempor sint ex. Ut in id consequat Lorem irure veniam ullamco dolore aliqua velit non veniam proident minim. Fugiat aute tempor labore non irure. Ullamco irure do consequat occaecat esse reprehenderit incididunt veniam exercitation. Adipisicing elit elit eiusmod consectetur consectetur labore voluptate eu occaecat consectetur tempor sunt commodo officia. Veniam sunt duis labore duis cillum."
      }
    ]
  },
  {
    "id": "9714a582-c7b7-4fc6-b058-e25bdb918092",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with non anim",
    "description": "Here are the detials: $Consectetur adipisicing Lorem dolore cupidatat ipsum voluptate pariatur ad do mollit ullamco exercitation. Ea qui aliqua et ipsum. Cupidatat cillum ipsum incididunt elit non excepteur duis ex. Velit id sint amet aliqua laboris ut et enim duis laborum id.",
    "creator": "user",
    "createdDate": "Sat Jul 10 2004 09:46:17 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "216897e2-a93d-4063-b73d-a93081cf9ea9",
        "creator": "admin",
        "createdDate": "Sun Mar 25 1984 05:01:12 GMT+0000 (UTC)",
        "text": "Fugiat ipsum est aute dolore ut officia sit. Magna incididunt ea eiusmod est ad ipsum eu quis nostrud cillum. Incididunt cillum ipsum cupidatat mollit. Et proident do in ad. Fugiat voluptate do nulla qui consectetur adipisicing do anim ipsum enim pariatur dolore eiusmod fugiat. Sunt enim dolor adipisicing sit cupidatat labore reprehenderit ea esse pariatur incididunt amet."
      },
      {
        "id": "35145470-61b4-408d-8c9b-4f9eb8b83406",
        "creator": "user",
        "createdDate": "Thu Jun 04 1992 05:01:37 GMT+0000 (UTC)",
        "text": "Deserunt officia proident proident fugiat velit nisi est sint proident eu fugiat enim id. Nulla nisi dolor est minim cillum duis amet sint excepteur anim voluptate voluptate. Lorem aliquip excepteur velit cillum eiusmod irure anim deserunt fugiat nisi. Laboris laboris mollit pariatur officia quis magna consectetur proident anim anim adipisicing incididunt ea Lorem. Ipsum laboris minim nulla id ex reprehenderit. Cillum id ullamco aute nisi velit."
      }
    ]
  },
  {
    "id": "9c1e0232-d2a2-4072-91a2-bb80b6454b95",
    "status": IssueStatus.Fixed,
    "responsible": "admin",
    "title": "I have issue with dolore nulla",
    "description": "Here are the detials: $Sint Lorem irure sit veniam. Non veniam nulla irure aliquip excepteur consectetur labore et nostrud consequat reprehenderit Lorem quis aliquip. Aliqua nostrud nisi Lorem irure duis ipsum ut occaecat. In non laborum nostrud aute minim consequat laborum.",
    "creator": "user",
    "createdDate": "Sat Jun 20 2015 23:46:36 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "49fcbbfa-4f4f-43cc-bc48-de8855e10a86",
        "creator": "admin",
        "createdDate": "Mon Jun 19 1995 10:33:06 GMT+0000 (UTC)",
        "text": "Magna fugiat ex anim commodo. Duis labore nisi sit nulla ullamco veniam tempor nostrud consectetur et aute non eu. Adipisicing proident sunt aute consequat Lorem cillum eu commodo laborum deserunt. Velit ullamco enim sunt cillum ullamco sint sit ea excepteur fugiat consequat quis. Dolor dolor nostrud cupidatat eu nisi duis exercitation aliqua deserunt Lorem enim ex id. Veniam elit exercitation amet labore aute sunt aliqua."
      },
      {
        "id": "f9873265-f5dd-4e74-b3ff-2044acf948bf",
        "creator": "user",
        "createdDate": "Tue Feb 07 1978 01:31:47 GMT+0000 (UTC)",
        "text": "Esse commodo in sit occaecat. Velit eu laborum nulla pariatur quis exercitation aliquip Lorem adipisicing sunt. Laborum cillum ipsum dolore laboris esse duis sint eiusmod dolore id pariatur. Tempor aute dolor ad pariatur incididunt adipisicing officia do tempor cillum adipisicing proident. Ut labore amet cillum ipsum velit cupidatat cillum et do. Amet nostrud culpa eu Lorem officia cupidatat officia proident Lorem labore pariatur."
      },
      {
        "id": "f4f505b7-6344-40e4-a93c-6887512d555d",
        "creator": "user",
        "createdDate": "Mon Jan 09 2017 04:49:36 GMT+0000 (UTC)",
        "text": "Irure deserunt sunt sunt anim velit mollit quis sit quis enim aliqua sint. Ad occaecat consequat mollit officia eiusmod Lorem. Sit ut culpa irure tempor in nostrud non velit. Aliqua esse proident cupidatat ad veniam dolor enim elit consequat in nisi. Dolor et velit do voluptate ut sunt elit deserunt irure. Mollit ex aute tempor labore ea cillum voluptate ut laboris sit eu."
      },
      {
        "id": "6b24c69a-8a6a-4120-9a56-bbfcea88738f",
        "creator": "admin",
        "createdDate": "Tue Aug 15 1989 08:47:22 GMT+0000 (UTC)",
        "text": "Et nostrud excepteur cupidatat nisi tempor magna fugiat. Officia dolor esse magna tempor est amet adipisicing cupidatat exercitation non commodo. Dolor eiusmod enim ullamco sunt. Culpa enim culpa cupidatat officia proident qui fugiat anim proident exercitation enim. Ipsum aute anim sunt anim occaecat culpa est commodo. Sit dolor ut laboris qui aliqua esse."
      },
      {
        "id": "2301d9ea-4d50-42f7-9800-85e28930d459",
        "creator": "user",
        "createdDate": "Sat Nov 14 1981 20:56:36 GMT+0000 (UTC)",
        "text": "Enim ipsum quis voluptate ullamco adipisicing officia. Nulla in voluptate fugiat incididunt elit eu consectetur do adipisicing eu ex sit pariatur Lorem. Lorem irure ex ex excepteur labore enim in elit ut nulla. Adipisicing non velit deserunt ullamco anim. Officia amet reprehenderit velit tempor labore ut voluptate est velit quis enim aute reprehenderit occaecat. Ex sunt exercitation nisi non dolore nostrud nostrud labore voluptate ad sint ipsum ullamco sunt."
      }
    ]
  },
  {
    "id": "3173e936-4a41-4b06-be81-64d511f91cc8",
    "status": IssueStatus.Fixed,
    "responsible": "admin",
    "title": "I have issue with sint Lorem",
    "description": "Here are the detials: $Velit nulla voluptate deserunt fugiat esse non. Proident eiusmod qui excepteur velit mollit qui irure magna incididunt id nisi aliquip non. Aliqua laboris eiusmod ut anim ex sit. Minim ipsum pariatur deserunt excepteur elit adipisicing aute labore adipisicing est deserunt cillum anim.",
    "creator": "user",
    "createdDate": "Mon Aug 03 2020 13:03:37 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "ec818bf8-1eae-4226-bce9-306abef45a1c",
        "creator": "user",
        "createdDate": "Mon Jun 11 1984 19:26:42 GMT+0000 (UTC)",
        "text": "Duis dolor aliqua aute est proident fugiat. Reprehenderit labore aliquip velit quis Lorem commodo mollit culpa commodo exercitation reprehenderit in. Lorem dolor dolor quis consectetur occaecat adipisicing enim. Nostrud eiusmod deserunt esse esse mollit. Reprehenderit incididunt consectetur ullamco nulla qui voluptate laboris consectetur est mollit anim esse. Esse est dolor sint consectetur quis labore anim anim exercitation adipisicing Lorem dolor quis."
      },
      {
        "id": "c5a33350-ca58-415c-956e-69aa5169ad23",
        "creator": "user",
        "createdDate": "Mon Sep 17 2012 14:18:15 GMT+0000 (UTC)",
        "text": "Fugiat culpa qui qui est enim dolor. Ipsum exercitation irure nisi irure qui fugiat mollit tempor do nulla culpa voluptate ipsum. Sit amet laborum exercitation do in cillum commodo ea duis ullamco labore. Ea aute culpa minim veniam consectetur dolore magna aliquip non nulla esse. Proident laboris est eiusmod commodo eiusmod reprehenderit velit ipsum est anim in. Enim commodo id tempor tempor enim nulla tempor commodo."
      },
      {
        "id": "c0da5e67-b409-46d6-9fcd-ffbf0e33b75b",
        "creator": "user",
        "createdDate": "Mon Sep 13 1976 11:28:42 GMT+0000 (UTC)",
        "text": "Amet cupidatat eiusmod voluptate pariatur ex dolore dolor. Aute velit non excepteur mollit. Exercitation tempor eiusmod nisi occaecat do non magna tempor labore et magna velit amet fugiat. Mollit deserunt culpa minim mollit aliqua pariatur sint occaecat sint consequat nostrud exercitation do. Nulla id deserunt aute cillum dolor cupidatat nulla. Mollit enim veniam sit amet commodo esse minim."
      },
      {
        "id": "5e6f7f12-47f7-487c-bc9c-8d3f4ffa4b5e",
        "creator": "admin",
        "createdDate": "Tue Apr 05 1983 08:26:40 GMT+0000 (UTC)",
        "text": "Proident aute in ad veniam est enim in labore minim. Fugiat mollit labore non aliqua cupidatat aliqua voluptate. Sunt laborum exercitation nulla sunt. Amet esse et labore nulla nostrud consequat eiusmod labore est laboris excepteur nostrud ipsum. Laborum ut do commodo laboris id enim ea reprehenderit do sit sint voluptate ullamco. Velit ex officia sit ex deserunt veniam."
      },
      {
        "id": "db17d622-247d-4212-a80c-7461cac04ef5",
        "creator": "user",
        "createdDate": "Mon Dec 03 2012 16:30:47 GMT+0000 (UTC)",
        "text": "Sit anim et dolore fugiat. Nulla veniam pariatur irure labore est. Eiusmod velit sint ipsum adipisicing. Exercitation occaecat voluptate id eiusmod aliquip non nulla. Non nostrud sint mollit officia excepteur tempor. Anim non id incididunt adipisicing est aliquip labore sint."
      }
    ]
  },
  {
    "id": "04485740-6a23-43ce-bd90-e43b8db73a08",
    "status": IssueStatus.WontFix,
    "responsible": "admin",
    "title": "I have issue with enim ullamco",
    "description": "Here are the detials: $Pariatur adipisicing enim voluptate qui et dolore deserunt excepteur non ad minim eiusmod. Cillum esse eiusmod commodo minim ad duis sunt irure eu quis Lorem. Voluptate ut ullamco minim deserunt nostrud in cillum cupidatat non enim deserunt. Reprehenderit sunt cillum proident aliquip amet ipsum eiusmod.",
    "creator": "user",
    "createdDate": "Mon Dec 13 2004 08:58:50 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "f9397eb6-5c0d-45b1-9e8d-d9b555be8a96",
        "creator": "admin",
        "createdDate": "Wed Feb 06 1991 01:56:44 GMT+0000 (UTC)",
        "text": "Occaecat irure cupidatat qui do ad exercitation ea laborum pariatur. Ad anim ad ullamco sit in ullamco excepteur dolor ut nulla fugiat. Sint consectetur duis veniam quis occaecat in tempor laboris nisi do excepteur tempor ullamco labore. Elit voluptate aute do id anim mollit quis nisi id minim. Consectetur qui eu quis proident enim amet velit nulla sint excepteur. Cupidatat aliquip adipisicing enim ad laboris."
      },
      {
        "id": "23735c24-c2e9-4683-8d9a-8cd331c2b58a",
        "creator": "admin",
        "createdDate": "Fri Jul 30 1993 01:39:32 GMT+0000 (UTC)",
        "text": "Amet minim cillum nostrud laboris consectetur reprehenderit ut eu labore. Reprehenderit eu aliquip tempor aute consequat eiusmod id. Dolore pariatur aliquip esse enim Lorem laborum. Commodo consequat consequat sint duis ex ipsum do sit. Aute irure incididunt magna adipisicing exercitation adipisicing. Dolore culpa velit consectetur ex exercitation elit."
      },
      {
        "id": "66cfb577-06eb-4670-b47a-f60e91ed7b38",
        "creator": "admin",
        "createdDate": "Sun Jun 12 1977 03:37:13 GMT+0000 (UTC)",
        "text": "Consectetur cupidatat nostrud commodo nostrud voluptate consectetur sint enim ad laboris occaecat sunt. Consectetur esse consequat quis eiusmod est eiusmod ex dolor labore. Fugiat commodo pariatur amet cupidatat laboris velit aliquip consequat nostrud voluptate voluptate proident tempor sint. Ut labore duis ut quis sit cillum non sit et irure incididunt incididunt amet. Nostrud fugiat ut laborum mollit. Occaecat ipsum id labore non deserunt mollit nisi consequat aliquip consequat officia cupidatat nostrud cillum."
      },
      {
        "id": "dc44eec6-dc82-4180-9552-5cd3248e58df",
        "creator": "admin",
        "createdDate": "Sat Jun 07 1986 03:54:55 GMT+0000 (UTC)",
        "text": "Dolor dolor Lorem veniam occaecat. Tempor incididunt commodo qui in consequat. Tempor culpa fugiat in fugiat ea nulla do velit mollit cupidatat. Elit nulla laborum labore minim do commodo Lorem incididunt reprehenderit. Commodo pariatur esse dolore Lorem. Dolor commodo sint dolor proident veniam ut tempor ipsum anim est in sunt."
      }
    ]
  },
  {
    "id": "ad159188-230e-456a-9790-4f32696f4f12",
    "status": IssueStatus.Fixed,
    "responsible": "admin",
    "title": "I have issue with eiusmod nisi",
    "description": "Here are the detials: $Fugiat do aliquip Lorem fugiat labore voluptate consectetur dolor. Aliqua proident veniam elit veniam eu minim. Nulla excepteur in mollit ipsum sit minim reprehenderit. Irure non officia culpa officia tempor consequat incididunt aliqua ipsum mollit minim.",
    "creator": "user",
    "createdDate": "Sun Jul 04 1982 10:52:06 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "a8dba1b3-d956-4900-b1a0-e57863994ee5",
        "creator": "admin",
        "createdDate": "Tue Oct 24 2000 17:35:46 GMT+0000 (UTC)",
        "text": "Sint id ea laborum sint. Ad Lorem deserunt consectetur adipisicing dolore labore labore ex enim fugiat fugiat occaecat adipisicing. Adipisicing et proident pariatur reprehenderit proident officia ad. Ipsum dolore ea ad aliquip veniam Lorem nostrud ut cillum qui. Non eu culpa veniam proident et proident sint in est cupidatat proident. Reprehenderit cillum ex laboris duis irure sunt eiusmod cupidatat ut."
      },
      {
        "id": "40e2942a-2615-4ac3-a6fe-350fb9a7b20d",
        "creator": "admin",
        "createdDate": "Thu Sep 14 2006 00:16:57 GMT+0000 (UTC)",
        "text": "Adipisicing dolore veniam laborum qui nisi qui tempor esse laborum reprehenderit proident elit sit. Reprehenderit ullamco id magna veniam sint Lorem dolor magna. Duis ex irure sint commodo in velit incididunt pariatur. Veniam culpa ullamco ut incididunt laborum pariatur commodo ex aliquip reprehenderit ad voluptate veniam irure. Ipsum qui elit tempor quis velit tempor. Mollit quis ex ex enim eiusmod mollit amet sunt mollit cillum."
      },
      {
        "id": "0f82be83-5aec-4fc5-9369-4ad97d0cdb91",
        "creator": "user",
        "createdDate": "Sun Aug 08 1976 01:59:48 GMT+0000 (UTC)",
        "text": "Et commodo dolore anim velit et ullamco veniam fugiat cillum do culpa laborum aute. Mollit deserunt laboris irure aliquip magna incididunt non ullamco in anim duis. Dolore sunt mollit aliquip quis tempor consectetur non exercitation irure labore do dolore officia. Ut nulla amet elit sint cupidatat nisi irure eiusmod id minim consequat veniam. Labore nisi labore qui do est deserunt veniam esse ex ut voluptate nostrud. Ea nulla et laboris id ut aute non elit ad."
      },
      {
        "id": "ebc2c78f-eece-4590-b27c-2e0f4083e352",
        "creator": "user",
        "createdDate": "Wed Oct 04 2000 12:58:27 GMT+0000 (UTC)",
        "text": "Ullamco voluptate aliquip mollit excepteur enim laborum deserunt voluptate deserunt consectetur ullamco nisi ipsum ipsum. Est aliqua elit labore id ullamco et irure magna do excepteur tempor consectetur nostrud dolore. Esse commodo mollit sit reprehenderit velit magna dolor sit dolore officia. Velit in ea tempor consequat. Ex excepteur aliqua adipisicing nisi exercitation proident labore officia est ipsum. Sunt ullamco adipisicing proident irure esse."
      }
    ]
  },
  {
    "id": "e7187224-6fc6-4fe4-9218-c2366b2c81f6",
    "status": IssueStatus.Fixed,
    "responsible": "admin",
    "title": "I have issue with nisi voluptate",
    "description": "Here are the detials: $Aute non aliqua consequat anim amet exercitation sint excepteur fugiat incididunt cupidatat non dolore commodo. Labore ad minim ipsum aliquip mollit sunt cupidatat incididunt dolor laborum reprehenderit. Occaecat enim eiusmod velit voluptate ex dolore ullamco. Ipsum id eiusmod aute veniam ex.",
    "creator": "user",
    "createdDate": "Mon Apr 09 2012 22:52:24 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "6efd5c7c-7f80-4018-95ee-e50fe4d588d0",
        "creator": "admin",
        "createdDate": "Sun Jan 23 1977 01:14:52 GMT+0000 (UTC)",
        "text": "Laboris ut consequat est duis sit eu ullamco excepteur. Consectetur consequat sit pariatur qui. Ullamco do do officia commodo nostrud occaecat. Consequat minim non culpa mollit. Labore nulla duis minim sint. Laborum sunt exercitation qui non."
      },
      {
        "id": "ac970922-b5e2-4413-b23b-8987c08b8413",
        "creator": "user",
        "createdDate": "Sun Apr 12 2020 13:03:24 GMT+0000 (UTC)",
        "text": "Veniam ad ullamco anim id id Lorem eu elit veniam ut sunt veniam do. Qui ea minim aliquip duis cillum. Id cupidatat excepteur ad sunt ullamco nisi. Ea velit ex irure sint voluptate fugiat minim exercitation esse consectetur cupidatat enim minim. Adipisicing excepteur ut dolore eiusmod in proident ipsum ex anim labore. Eu deserunt incididunt elit qui."
      },
      {
        "id": "f4f858fb-6e79-4de7-b0b6-ba86492f815d",
        "creator": "admin",
        "createdDate": "Thu Aug 25 2016 14:28:56 GMT+0000 (UTC)",
        "text": "Minim et et voluptate ipsum cupidatat excepteur excepteur et incididunt exercitation ut. Qui deserunt proident occaecat commodo commodo. Magna reprehenderit fugiat laborum tempor nisi exercitation aliqua voluptate duis sit commodo anim eu labore. Sunt exercitation elit aliquip minim. Do enim nulla amet fugiat sint labore eu magna culpa qui quis duis ex. Eu occaecat qui incididunt deserunt."
      },
      {
        "id": "9da8501a-d510-4788-9a88-65a3f620d876",
        "creator": "user",
        "createdDate": "Wed Jul 09 1980 15:08:08 GMT+0000 (UTC)",
        "text": "Eu duis in non magna veniam proident eu est qui ut magna deserunt ex eu. Dolor exercitation esse duis sunt incididunt eiusmod. Sunt nulla irure laborum cillum eu veniam magna proident. Elit commodo voluptate sit ut incididunt sunt ut. Adipisicing non cupidatat laborum labore dolore veniam. Excepteur aliquip eu laborum elit consequat tempor quis aute duis consectetur deserunt."
      },
      {
        "id": "37f704f7-28c6-408e-9672-d0b17275ae49",
        "creator": "user",
        "createdDate": "Wed Jan 21 1987 08:17:42 GMT+0000 (UTC)",
        "text": "Fugiat fugiat nostrud laboris nisi cupidatat quis. Nisi consectetur irure qui fugiat dolor mollit magna mollit irure. Incididunt cillum fugiat mollit sit. Est occaecat exercitation ullamco anim. Do magna magna proident fugiat consequat reprehenderit aliqua minim reprehenderit. Veniam duis qui ullamco cillum excepteur culpa sit laborum culpa et minim."
      }
    ]
  },
  {
    "id": "092bc568-e067-4df0-8247-e7a27ffe8edd",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with est ex",
    "description": "Here are the detials: $Officia ex excepteur do magna culpa et veniam pariatur. Pariatur culpa dolore laboris qui laborum proident reprehenderit ipsum aliqua minim voluptate. Commodo laborum irure velit anim occaecat excepteur amet fugiat adipisicing eu. Esse laborum laboris exercitation enim id elit exercitation est.",
    "creator": "user",
    "createdDate": "Mon Jan 10 1994 15:17:38 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "b2c6c5f7-28c1-4545-b59c-c7e6457e65f2",
        "creator": "user",
        "createdDate": "Fri Mar 13 1992 21:35:12 GMT+0000 (UTC)",
        "text": "Adipisicing cupidatat et ipsum et cillum amet nisi voluptate proident duis ullamco fugiat. Minim id ut esse et aliqua dolore eu sunt excepteur ut. Magna mollit deserunt ex occaecat aute laboris elit eiusmod nostrud amet. Ullamco cillum eu duis consectetur eiusmod voluptate magna enim consequat cupidatat exercitation. Ipsum eu in reprehenderit eiusmod incididunt. Reprehenderit esse labore non sit officia irure aliquip ea amet."
      },
      {
        "id": "78d6fb09-3690-4a6c-b2e8-a0507645d1a3",
        "creator": "admin",
        "createdDate": "Tue Sep 20 1983 03:22:49 GMT+0000 (UTC)",
        "text": "Adipisicing laboris aute laboris magna eiusmod officia duis veniam consectetur nostrud nulla qui cupidatat non. Reprehenderit qui do nulla qui et ullamco veniam commodo ullamco sit nostrud mollit. Magna laborum culpa qui irure culpa id aliqua. Ut esse voluptate ea Lorem. Ut aute ex ut dolore veniam et elit labore qui in duis mollit. Aliquip aute cupidatat quis amet non do ex."
      }
    ]
  },
  {
    "id": "e19468fd-2f4f-444c-92af-bbd84333a6fc",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with qui aute",
    "description": "Here are the detials: $Cillum officia aliqua incididunt dolore ea labore aliquip irure consectetur enim. Aliquip aliquip adipisicing magna qui nisi adipisicing duis duis ut voluptate et proident dolore in. Elit et labore sunt laboris excepteur nulla. Eiusmod qui est nulla labore nostrud cupidatat laborum elit sint sit quis voluptate velit ipsum.",
    "creator": "user",
    "createdDate": "Wed Jan 18 1978 11:47:43 GMT+0000 (UTC)",
    "comments": []
  },
  {
    "id": "effb2372-b25f-4282-9267-9d6820c88226",
    "status": IssueStatus.Fixed,
    "responsible": "admin",
    "title": "I have issue with in esse",
    "description": "Here are the detials: $Id duis veniam irure magna tempor ullamco elit dolor officia cupidatat ex. Officia sit ea eu non velit magna. Ex nulla aliqua do fugiat proident veniam officia. Nostrud adipisicing nisi proident proident proident.",
    "creator": "user",
    "createdDate": "Sun Apr 25 2010 06:11:28 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "40aaff61-1b11-46c2-a3a8-31faae097392",
        "creator": "admin",
        "createdDate": "Wed Jan 06 1971 23:54:46 GMT+0000 (UTC)",
        "text": "Et enim et nulla laborum cillum irure irure cupidatat in ex aliqua id. Amet non nostrud esse minim esse ex laboris quis culpa consectetur. Consectetur officia ullamco cillum do. Fugiat consequat dolor aliquip nulla nisi id ullamco. Aute labore pariatur incididunt quis proident officia labore. Voluptate anim consectetur laboris qui magna dolor aliqua consectetur mollit."
      },
      {
        "id": "4f76f6d5-4470-480c-84ad-2d0435c012c5",
        "creator": "user",
        "createdDate": "Sun Jun 02 2002 05:40:17 GMT+0000 (UTC)",
        "text": "Dolore irure culpa et ex veniam fugiat deserunt enim ad sint. Nisi nisi officia in non exercitation incididunt est elit enim. Sit irure amet adipisicing quis sunt aliqua pariatur velit cillum. Nostrud nisi est occaecat laborum eu ex qui duis velit in aute. Non esse culpa dolore elit cupidatat est do ex. Commodo eu elit enim consequat."
      }
    ]
  },
  {
    "id": "bbf388ed-5bab-4825-819a-31a5d0f9fccb",
    "status": IssueStatus.WontFix,
    "responsible": "admin",
    "title": "I have issue with laboris adipisicing",
    "description": "Here are the detials: $Voluptate minim qui aliqua tempor velit consequat esse fugiat Lorem ullamco ea minim est veniam. Esse incididunt culpa elit dolor voluptate fugiat nulla cillum qui ea mollit adipisicing. Lorem quis id duis excepteur sunt. Dolore incididunt commodo nostrud pariatur.",
    "creator": "user",
    "createdDate": "Sat Dec 26 1992 09:53:08 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "fa0338c9-8c95-446d-a187-5e67db68c664",
        "creator": "admin",
        "createdDate": "Sun Feb 04 2018 06:44:31 GMT+0000 (UTC)",
        "text": "Commodo est labore adipisicing sunt velit est voluptate laboris nulla ullamco culpa dolore. Officia deserunt sit sint eu elit mollit do quis non aliqua cillum dolore. Incididunt reprehenderit sint ullamco esse aute et amet consectetur mollit consequat nulla. Eu voluptate aute exercitation laboris anim non sunt. Culpa exercitation enim fugiat nisi labore. Id voluptate proident est aute."
      },
      {
        "id": "d0647e46-0c2a-49e9-9847-a9371c55362b",
        "creator": "admin",
        "createdDate": "Mon Apr 24 1972 09:31:41 GMT+0000 (UTC)",
        "text": "Nulla occaecat anim ad velit ex velit dolor tempor esse. Ea laborum nulla exercitation duis. Occaecat reprehenderit officia aute aliqua anim fugiat aute dolore Lorem voluptate. Mollit amet ullamco in deserunt et aute in magna incididunt laborum aute magna consectetur. Culpa pariatur dolore proident ipsum. Esse voluptate duis amet elit ex consequat reprehenderit in do eu eu mollit incididunt."
      },
      {
        "id": "007f358a-e88d-4bf0-b09f-d9506dd8aac8",
        "creator": "admin",
        "createdDate": "Sun Jul 06 1986 17:45:50 GMT+0000 (UTC)",
        "text": "Proident est sint magna ullamco pariatur laboris sit et. Mollit laboris ut laboris velit labore fugiat. Nostrud exercitation ad enim tempor proident quis dolore dolore sint culpa dolore irure. Velit pariatur nisi do eiusmod nostrud dolor sunt minim. Nisi tempor non amet reprehenderit eu ad enim Lorem dolore deserunt eiusmod Lorem ea. Proident magna dolor non et."
      },
      {
        "id": "6fb7e12f-e5af-4cd0-9d3a-0fab941d892f",
        "creator": "admin",
        "createdDate": "Mon Feb 25 2008 14:18:10 GMT+0000 (UTC)",
        "text": "Sint aute excepteur voluptate elit. Sunt mollit qui laboris ad pariatur consequat ullamco aliquip minim. Proident non irure officia in voluptate officia qui reprehenderit nulla. Anim esse aliqua cupidatat voluptate magna aute deserunt est laborum elit sunt sunt ullamco Lorem. Minim amet esse proident et cillum enim adipisicing sunt est aute aliquip sit ipsum. Est consectetur enim ex ullamco cillum esse cillum ullamco id dolore tempor esse ad."
      }
    ]
  },
  {
    "id": "4b64f07f-dff1-40e4-b077-07bea910b860",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with sunt cupidatat",
    "description": "Here are the detials: $Cupidatat in labore sint commodo voluptate cupidatat velit pariatur proident irure sint. Fugiat exercitation reprehenderit Lorem id enim sunt ex ea id esse irure sit nostrud. Tempor deserunt aliquip ad officia duis labore deserunt nisi aute aliquip duis minim duis aute. Dolore excepteur cupidatat aute consequat esse ea tempor quis.",
    "creator": "user",
    "createdDate": "Wed Aug 23 2017 14:32:51 GMT+0000 (UTC)",
    "comments": []
  },
  {
    "id": "8692aa7c-c454-42e5-8390-fbab107ad3ee",
    "status": IssueStatus.New,
    "responsible": "admin",
    "title": "I have issue with aute Lorem",
    "description": "Here are the detials: $Id laboris est nulla do. Est Lorem labore reprehenderit qui in incididunt quis est labore labore labore do pariatur voluptate. Incididunt voluptate anim tempor sit proident elit eiusmod reprehenderit. Consequat cillum amet nulla quis.",
    "creator": "user",
    "createdDate": "Wed Mar 09 1983 03:04:59 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "80699616-01e0-4e98-a6a9-25e40d6aefbb",
        "creator": "user",
        "createdDate": "Tue Oct 18 2005 11:39:51 GMT+0000 (UTC)",
        "text": "Esse nostrud est elit amet consectetur. Voluptate labore consectetur Lorem aute nostrud. Et eu id excepteur ut velit minim elit. Lorem sunt incididunt proident fugiat consequat laboris cupidatat amet nostrud esse esse esse commodo. Ex elit exercitation reprehenderit qui deserunt incididunt minim. Dolore et sunt id et tempor adipisicing est sint reprehenderit mollit."
      },
      {
        "id": "3297e2fc-d9bd-4a62-b102-dfc37694e0db",
        "creator": "admin",
        "createdDate": "Wed Mar 14 1979 02:24:08 GMT+0000 (UTC)",
        "text": "Tempor non occaecat commodo do nulla nostrud nostrud ut occaecat ullamco nulla velit. Consectetur ad exercitation amet est reprehenderit laboris. In excepteur ea ex ipsum officia. Excepteur incididunt incididunt consequat Lorem duis. Fugiat occaecat adipisicing laborum mollit. Dolor Lorem irure adipisicing est cupidatat velit consectetur magna commodo culpa."
      },
      {
        "id": "c5b1c395-189c-4268-9d4d-af30b6e3b11a",
        "creator": "user",
        "createdDate": "Wed Nov 20 1991 17:44:14 GMT+0000 (UTC)",
        "text": "Irure esse nostrud Lorem duis labore culpa mollit aliquip nostrud. Aliqua commodo est labore et sit in fugiat laboris enim adipisicing aliquip non consequat exercitation. Veniam nostrud in sit in amet aute ut quis cupidatat magna tempor dolor ad. Lorem veniam incididunt aliqua nostrud deserunt quis mollit irure. Velit sint excepteur cupidatat labore laborum deserunt cupidatat cupidatat elit enim. Elit sit minim sit excepteur id minim ea ea duis ad non labore cupidatat Lorem."
      }
    ]
  },
  {
    "id": "28e35273-aa85-4edb-b61b-fc79cf48be9c",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with reprehenderit qui",
    "description": "Here are the detials: $Eiusmod eu eiusmod laborum occaecat laboris deserunt nulla et sint. Sint minim aute ullamco consequat tempor nulla incididunt non. Eu irure incididunt consequat cupidatat amet aliquip aliqua sint culpa. Officia nostrud in anim mollit qui ex sunt ex quis ut aliqua dolor nulla.",
    "creator": "user",
    "createdDate": "Wed Nov 11 1992 16:39:41 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "d45b519a-8339-4fa3-89e5-8a045674268d",
        "creator": "user",
        "createdDate": "Wed Sep 08 1993 15:07:17 GMT+0000 (UTC)",
        "text": "Laborum velit veniam enim consectetur irure magna veniam est consectetur do excepteur ipsum exercitation. Cupidatat et deserunt irure ea qui duis. Nisi labore nisi minim incididunt minim magna officia dolore est sunt. Reprehenderit ullamco ad nisi reprehenderit dolore aliquip adipisicing. Sint est elit labore voluptate deserunt aliquip occaecat consectetur enim non commodo. Sit elit adipisicing incididunt sint cupidatat sit laborum ea magna amet pariatur mollit nisi."
      },
      {
        "id": "e6d78972-3891-445e-a871-038a49cd8e43",
        "creator": "admin",
        "createdDate": "Wed Oct 02 2002 07:16:04 GMT+0000 (UTC)",
        "text": "Nulla sunt dolore consequat culpa incididunt velit dolor ipsum elit eiusmod eu proident. Ullamco dolor magna eu anim consectetur nulla labore velit excepteur et reprehenderit. Quis deserunt nisi ex et nulla id commodo minim deserunt magna ex consectetur laborum. Ipsum labore labore duis quis laborum eiusmod aliqua. Excepteur eu amet esse irure veniam id nostrud et cupidatat consequat. Et nostrud dolore reprehenderit deserunt cupidatat ut enim ipsum et pariatur."
      },
      {
        "id": "e9391eef-e909-4b9f-9122-0bc08de775e3",
        "creator": "admin",
        "createdDate": "Sun Aug 13 1972 23:37:09 GMT+0000 (UTC)",
        "text": "Labore ipsum et et labore eiusmod incididunt occaecat. Cillum dolor ut in id occaecat qui amet. Enim laborum aliqua id voluptate laborum pariatur labore ullamco dolore. Tempor ut commodo dolor nulla incididunt aliquip adipisicing aute magna excepteur. Aute sunt ex sunt enim cupidatat. Sunt ipsum aute enim do ipsum dolor enim dolore."
      },
      {
        "id": "dd1e1e17-a564-4233-9034-4ec09453a3be",
        "creator": "user",
        "createdDate": "Wed Oct 05 1994 19:59:39 GMT+0000 (UTC)",
        "text": "Eu excepteur commodo ipsum qui commodo do eu cupidatat non qui aliquip dolor id. Minim nostrud culpa incididunt dolor consequat exercitation. Sit enim commodo aute ex amet. Voluptate aliqua tempor enim dolor nulla Lorem in dolore enim Lorem nisi nostrud mollit. Qui id dolor exercitation aliqua duis cillum duis minim non id veniam. Ut mollit aliqua officia magna."
      }
    ]
  },
  {
    "id": "c5ba2d4a-6dbe-449b-b2ae-1d913c0e45e6",
    "status": IssueStatus.New,
    "responsible": "admin",
    "title": "I have issue with consectetur excepteur",
    "description": "Here are the detials: $Est Lorem laborum qui anim aute eu ullamco cillum ipsum aute eu. Consectetur nostrud veniam enim culpa tempor velit adipisicing eiusmod Lorem sint fugiat eu. Ea cupidatat consequat cupidatat laborum ut reprehenderit sit excepteur quis cupidatat ullamco labore labore deserunt. Velit cupidatat incididunt qui exercitation magna est commodo.",
    "creator": "user",
    "createdDate": "Wed Dec 09 2015 23:09:59 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "04a3aa6a-9db4-4c1e-b7ad-29c8e096444c",
        "creator": "user",
        "createdDate": "Mon May 20 2002 09:52:06 GMT+0000 (UTC)",
        "text": "Consectetur nostrud enim enim occaecat enim anim fugiat culpa occaecat. Proident eiusmod dolor est adipisicing. Consequat do tempor minim Lorem anim sit esse anim veniam non. Fugiat dolore tempor dolor sunt duis non sunt mollit sit ut nostrud. Dolor excepteur labore officia ut commodo Lorem nulla. Aliquip do commodo deserunt Lorem consectetur pariatur."
      },
      {
        "id": "884beef3-e49a-40b9-bc6b-bc5d0b70f530",
        "creator": "user",
        "createdDate": "Mon Feb 11 1980 02:28:20 GMT+0000 (UTC)",
        "text": "Nostrud ea reprehenderit aliquip enim deserunt qui mollit ipsum reprehenderit commodo ex nisi irure. Do duis irure nostrud elit ea velit veniam voluptate in amet laborum laborum duis. Non esse commodo eiusmod qui velit. Proident fugiat labore excepteur anim culpa ullamco reprehenderit irure voluptate officia cillum veniam consequat excepteur. Ex laboris ea aliqua culpa et nisi sunt ad excepteur exercitation nostrud labore ex. Sunt et eu incididunt ullamco elit eu consectetur ad sit commodo."
      },
      {
        "id": "169abb97-c2a4-4b90-9031-3448d4d29dfc",
        "creator": "admin",
        "createdDate": "Thu Aug 19 1999 17:57:39 GMT+0000 (UTC)",
        "text": "Culpa occaecat reprehenderit adipisicing adipisicing minim nostrud dolor excepteur labore consequat. Officia anim enim sunt ad nulla aute reprehenderit. Fugiat minim qui velit sunt elit irure laboris excepteur id sunt esse amet non minim. Irure cupidatat nulla proident amet aliqua aliquip et laborum ut id magna ipsum sunt anim. Consectetur Lorem aute ad voluptate aliquip esse laborum minim cupidatat nostrud do id consectetur reprehenderit. Laborum commodo labore magna reprehenderit."
      },
      {
        "id": "c2e15cd0-3ba9-420d-88a1-630e0195a62f",
        "creator": "admin",
        "createdDate": "Wed Jun 18 1997 03:24:43 GMT+0000 (UTC)",
        "text": "Anim proident in sit irure ad est reprehenderit nisi eu dolore reprehenderit deserunt consequat est. Duis officia quis pariatur reprehenderit exercitation incididunt non nisi exercitation ut ut nulla sunt. Velit quis ut do qui est commodo. Eiusmod voluptate ad minim irure. Excepteur non nisi officia nisi aliqua voluptate nulla ipsum dolore nisi laborum aliqua. Nostrud id ex ea laboris anim irure deserunt esse ipsum sunt incididunt veniam ea dolor."
      },
      {
        "id": "b86ebe2b-5eae-4126-8ebf-f5be10f12a5b",
        "creator": "user",
        "createdDate": "Sun Aug 06 1978 10:33:51 GMT+0000 (UTC)",
        "text": "Qui mollit aliqua incididunt incididunt duis cillum labore. Esse velit laborum laboris exercitation. Officia ea officia ipsum exercitation pariatur consectetur veniam eiusmod cupidatat Lorem aliquip est aute. Eu sit consequat veniam id fugiat anim cillum proident cillum tempor. Dolore id Lorem proident reprehenderit non sint nulla tempor sunt consequat sit nisi. Proident sit non sint culpa irure sint culpa."
      }
    ]
  },
  {
    "id": "25c36920-dd4b-415c-875e-99858f34beb9",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with irure proident",
    "description": "Here are the detials: $Est consectetur do anim aliqua id. Proident qui ut elit ipsum sunt nisi laborum aliquip voluptate minim nisi adipisicing in elit. Occaecat deserunt quis pariatur pariatur in ullamco. Labore laboris reprehenderit reprehenderit occaecat pariatur.",
    "creator": "user",
    "createdDate": "Tue Feb 03 1987 23:04:14 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "42ff486d-4413-493b-8fe4-2d26ed6d47bf",
        "creator": "admin",
        "createdDate": "Wed Jun 06 1984 04:15:42 GMT+0000 (UTC)",
        "text": "Amet anim velit cillum nisi velit proident aliqua aliqua amet culpa mollit irure. Labore et eiusmod minim commodo excepteur irure aliquip eu aliqua. Veniam eiusmod ea aute reprehenderit consectetur sunt. Sint do irure ad tempor duis qui minim dolore voluptate. Dolor dolore enim proident occaecat consequat non occaecat labore et enim consequat commodo. Commodo ipsum occaecat aliqua magna eiusmod."
      },
      {
        "id": "da63ec6f-f7c2-4642-a875-bc448341fd09",
        "creator": "admin",
        "createdDate": "Sun Dec 17 1995 11:54:47 GMT+0000 (UTC)",
        "text": "Ipsum irure et ullamco veniam sint qui irure. Do adipisicing ad cillum proident et veniam nulla ad esse. Nulla culpa nulla consequat dolore ullamco elit. Amet magna qui nostrud duis culpa anim eiusmod magna nostrud. Proident ea in nulla labore. Sint voluptate officia ipsum adipisicing officia labore cillum nostrud."
      }
    ]
  },
  {
    "id": "770696fa-e7bc-406d-9347-f61dc5799b9f",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with sunt occaecat",
    "description": "Here are the detials: $Aliquip ullamco amet incididunt duis ut ipsum nostrud id minim occaecat anim nulla occaecat. Magna elit non ullamco cillum proident do dolore. Id proident officia anim aliquip pariatur in laboris non eiusmod consequat id id. Sint consequat esse magna consequat qui.",
    "creator": "user",
    "createdDate": "Thu Nov 22 1973 08:40:16 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "82a5ac88-6537-4e57-b2e7-42e83d278355",
        "creator": "user",
        "createdDate": "Sun Sep 05 1982 23:11:46 GMT+0000 (UTC)",
        "text": "Veniam nulla ad dolor officia eu minim. Sint pariatur id ipsum nisi occaecat mollit dolor. Aute cillum ea nostrud sunt adipisicing mollit. Laborum exercitation dolor voluptate ea exercitation deserunt. Nulla laborum sit anim minim consequat ea. Dolor ullamco proident minim commodo occaecat nisi aliqua ullamco."
      },
      {
        "id": "9b585f35-4555-41ed-bc59-e8abb3db6015",
        "creator": "admin",
        "createdDate": "Tue Dec 18 2001 06:15:44 GMT+0000 (UTC)",
        "text": "Voluptate enim veniam cillum mollit minim cillum nostrud voluptate cillum nostrud id minim. Ipsum consectetur quis velit ullamco tempor laboris commodo ex reprehenderit. Commodo ipsum exercitation ad tempor duis id nostrud nulla. In consequat non anim laboris proident nulla magna fugiat deserunt velit reprehenderit sit tempor. Excepteur sunt sunt magna quis et consequat laborum et laboris. Ex cupidatat culpa labore occaecat fugiat cupidatat magna incididunt nostrud et."
      }
    ]
  },
  {
    "id": "0798aebc-425d-47ed-9ef5-1fa2507055ad",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with non exercitation",
    "description": "Here are the detials: $Id deserunt eiusmod elit in. Occaecat esse id sunt consectetur magna nostrud enim et incididunt commodo. Ex exercitation laboris incididunt duis deserunt sint nisi. Laborum do culpa ut ex elit consequat esse laboris.",
    "creator": "user",
    "createdDate": "Mon May 12 2014 21:36:56 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "653787b9-71bb-481f-a857-4cd2afb65c15",
        "creator": "user",
        "createdDate": "Wed Oct 03 2018 07:33:15 GMT+0000 (UTC)",
        "text": "Reprehenderit incididunt ea amet reprehenderit est tempor magna nulla excepteur culpa sit aute ipsum. Pariatur reprehenderit tempor aliquip dolore dolore aliqua ullamco. Do labore sunt dolore irure labore deserunt sint eu est amet aliquip sunt voluptate incididunt. Ut minim dolor deserunt irure minim fugiat adipisicing non sunt quis culpa esse. Aute officia velit pariatur cupidatat. Esse incididunt voluptate ex eu eu."
      },
      {
        "id": "402296c8-c30a-4ff9-89d1-728568d588ac",
        "creator": "user",
        "createdDate": "Mon Dec 16 1991 03:34:25 GMT+0000 (UTC)",
        "text": "Officia ea culpa eiusmod dolor. Nisi velit aliquip sint ea non sunt voluptate incididunt ex. Magna occaecat nostrud ut excepteur laboris et ea. Velit nostrud mollit duis enim sit. Ea sint in incididunt officia in amet. Culpa quis et in sunt qui nisi cillum commodo magna eu do."
      },
      {
        "id": "f6fa36b2-e059-4788-8271-fdde0a500aac",
        "creator": "user",
        "createdDate": "Thu Apr 04 1985 00:42:10 GMT+0000 (UTC)",
        "text": "Eu mollit aliqua incididunt consequat enim irure laboris eiusmod ipsum. Nulla minim occaecat irure sunt laborum deserunt consectetur voluptate eiusmod tempor ipsum elit. Excepteur voluptate eiusmod quis officia eu voluptate sint velit sit laboris culpa cupidatat ipsum. Cillum magna Lorem sit velit irure amet aute. Ex et cillum mollit incididunt pariatur exercitation minim ipsum veniam laboris ullamco eiusmod. Ea enim quis sit pariatur labore."
      },
      {
        "id": "c241481b-b647-404d-b016-7854c9b5b663",
        "creator": "admin",
        "createdDate": "Sun Apr 13 1986 10:01:48 GMT+0000 (UTC)",
        "text": "Nisi sint elit aliquip et non fugiat nulla magna reprehenderit sit magna. Reprehenderit aute aute eu non est. Irure cillum elit aliqua non. Duis aliqua irure excepteur aute. Nisi eiusmod duis culpa deserunt mollit esse ipsum nulla elit. Ipsum consectetur cillum ea sunt."
      },
      {
        "id": "066cae93-6f1c-4113-b88d-19b97ef4e0ed",
        "creator": "user",
        "createdDate": "Tue Feb 04 1997 22:06:33 GMT+0000 (UTC)",
        "text": "Non officia consectetur adipisicing elit exercitation deserunt sunt eiusmod anim ad. Et sint minim ut esse ipsum proident amet incididunt adipisicing dolore eu eu. Labore magna ullamco cillum magna dolore consequat cillum voluptate ad non ea nisi ut ullamco. Aliquip fugiat duis exercitation occaecat fugiat ut esse do est ad exercitation laborum. Laboris velit quis aliqua do do ut incididunt nisi excepteur culpa ut cupidatat. Minim ad amet ut velit culpa eu."
      }
    ]
  },
  {
    "id": "0796c602-9167-460a-b309-0e99183121cc",
    "status": IssueStatus.InProgress,
    "responsible": "admin",
    "title": "I have issue with veniam cillum",
    "description": "Here are the detials: $Non ut nisi elit consequat. Dolor aute ipsum cillum pariatur. Enim do qui qui fugiat eu culpa occaecat fugiat occaecat exercitation est. Tempor ut et Lorem occaecat cupidatat consectetur velit.",
    "creator": "user",
    "createdDate": "Thu Jan 09 1975 19:49:04 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "0c5b064a-94bf-421d-81bf-34c0242e03a9",
        "creator": "admin",
        "createdDate": "Mon May 15 1995 10:29:21 GMT+0000 (UTC)",
        "text": "Ullamco laborum ad magna non anim est mollit sint officia culpa nulla ut sunt. Nostrud tempor sunt aliqua id reprehenderit et magna duis enim officia Lorem. Sint quis pariatur deserunt veniam amet reprehenderit. Nostrud eu proident dolor eiusmod sint. Lorem minim nulla pariatur id sint amet incididunt reprehenderit et non exercitation reprehenderit. Proident minim esse officia eu eiusmod consequat."
      },
      {
        "id": "bad192a5-527c-40a9-9e5b-acd3b99f8fce",
        "creator": "user",
        "createdDate": "Thu Jul 03 2014 07:29:44 GMT+0000 (UTC)",
        "text": "Aliquip occaecat commodo sit voluptate duis ad amet id est sunt minim aute commodo aliqua. Do magna id aliqua ea tempor consequat deserunt mollit non exercitation esse. Est ipsum voluptate irure sunt adipisicing aliquip nostrud ea do pariatur Lorem ut. Aute in sunt laborum eiusmod aute minim aute pariatur. Sit ipsum consectetur minim id eu proident. Sit mollit proident cupidatat sit voluptate pariatur in laboris sit voluptate aliqua laboris tempor."
      },
      {
        "id": "dff171dc-6058-4f04-8144-cc7b546c0a20",
        "creator": "admin",
        "createdDate": "Wed Feb 20 2008 22:43:41 GMT+0000 (UTC)",
        "text": "Pariatur in aute sit aliqua duis nostrud in quis mollit ex. Qui ipsum ea ullamco elit proident sunt. Laboris cillum non ea aute dolore deserunt amet esse sit occaecat eiusmod. Ut duis cupidatat officia exercitation proident aliqua est Lorem ex cupidatat proident. Irure fugiat commodo tempor est duis cillum qui aute. Officia cupidatat veniam minim officia eu."
      },
      {
        "id": "837b467e-f9af-4d69-9351-a4e6c14f7c11",
        "creator": "user",
        "createdDate": "Sat Dec 27 1975 07:08:41 GMT+0000 (UTC)",
        "text": "Et nisi aliquip minim nostrud nostrud cillum aute esse ullamco qui. Reprehenderit eiusmod culpa pariatur Lorem eu dolor dolore veniam. Et irure anim est consequat reprehenderit adipisicing fugiat. Ullamco sit amet mollit irure. Ipsum duis anim consectetur incididunt est nulla eu. Et cupidatat officia voluptate nisi do adipisicing enim qui."
      },
      {
        "id": "50f6104d-15f1-40d4-8005-ec58822bcc2a",
        "creator": "admin",
        "createdDate": "Sat Jun 14 1980 09:58:33 GMT+0000 (UTC)",
        "text": "Fugiat ex culpa ad adipisicing occaecat Lorem consectetur veniam sit. Excepteur in veniam ullamco culpa sunt pariatur adipisicing pariatur id commodo. Ullamco qui incididunt anim in esse laboris magna do exercitation cupidatat. Occaecat enim culpa ea pariatur adipisicing ea fugiat id officia fugiat ad. Aliqua ut reprehenderit magna ex. Nostrud do ea qui laborum culpa veniam aliquip minim minim qui fugiat."
      }
    ]
  },
  {
    "id": "a8cf2bae-fabe-4d4a-b075-0a44e63bb8d5",
    "status": IssueStatus.WontFix,
    "responsible": "admin",
    "title": "I have issue with esse eiusmod",
    "description": "Here are the detials: $Voluptate dolor in consectetur dolor eu excepteur minim tempor do eiusmod sit non. Esse est dolor ex excepteur aute amet adipisicing esse incididunt nostrud cupidatat ad. Nisi et consequat pariatur tempor incididunt mollit. Ullamco cillum commodo magna in non sunt tempor aliquip officia irure proident.",
    "creator": "user",
    "createdDate": "Sat Dec 04 1976 19:06:28 GMT+0000 (UTC)",
    "comments": [
      {
        "id": "8543dfb0-6e95-42e2-af4d-56cec18c53af",
        "creator": "admin",
        "createdDate": "Sun Mar 19 1995 13:58:38 GMT+0000 (UTC)",
        "text": "Proident ut labore ullamco sit ea sit laborum laboris ut voluptate fugiat officia. Nisi ut proident elit tempor incididunt eiusmod deserunt exercitation amet proident aute. Pariatur eiusmod quis culpa veniam cupidatat elit occaecat ipsum commodo esse. Aute sit amet aliqua consectetur non eu eiusmod. Officia veniam eiusmod sunt incididunt reprehenderit qui duis esse ea laboris consequat. Lorem ullamco Lorem duis cillum consequat consequat elit consectetur sint fugiat nostrud consectetur."
      },
      {
        "id": "2fdbd0ac-560e-4a66-b550-4e4366aa16c0",
        "creator": "user",
        "createdDate": "Fri Mar 25 1983 06:41:34 GMT+0000 (UTC)",
        "text": "Anim proident reprehenderit nostrud aliquip irure excepteur ullamco non incididunt amet sit anim ad consequat. Excepteur quis culpa enim dolore incididunt do amet. Eu eiusmod culpa irure labore. Esse incididunt reprehenderit dolor aliqua officia ipsum magna. Ea dolore magna nulla ut adipisicing. Lorem qui deserunt sit nisi consectetur veniam cillum ex anim cupidatat."
      },
      {
        "id": "ac0e99a6-5d53-45f6-8f1e-421df18d0755",
        "creator": "user",
        "createdDate": "Thu Sep 12 1991 06:53:58 GMT+0000 (UTC)",
        "text": "Do duis non et consectetur. Deserunt veniam mollit labore do adipisicing minim cillum ut amet. Consectetur nostrud dolor aute aute veniam est incididunt elit aute ex incididunt sit. Deserunt laborum dolore sunt fugiat aliquip exercitation esse excepteur voluptate ad laboris eiusmod adipisicing dolor. Voluptate ullamco dolor ad ex nisi amet amet mollit amet sint et est laboris. Culpa aliqua veniam dolor adipisicing commodo elit cillum laboris laborum aliquip quis."
      },
      {
        "id": "00c8002a-0acf-4f4d-8758-e853d166990c",
        "creator": "user",
        "createdDate": "Fri Aug 24 2018 20:26:41 GMT+0000 (UTC)",
        "text": "Et aliquip esse ullamco eiusmod ex elit incididunt elit. Deserunt proident voluptate irure adipisicing sit fugiat culpa et sit veniam pariatur nisi. Consequat sunt duis ullamco aliquip deserunt cupidatat sint minim. Anim officia commodo consequat ullamco nostrud amet anim in ut qui et proident. Occaecat sint quis cillum dolor eu nisi. Duis magna culpa consectetur sunt Lorem dolore ipsum."
      }
    ]
  }
];

export function getUsers(): Array<IUser> {
  return [
    { username: ADMIN, password: ADMIN, role: UserRole.Admin},
    { username: USER, password: USER, role: UserRole.User},
  ];
}

export function getIssues(): Array<IIssue> {
  return issues.map( i => {
    return  {
      ...i,
      createdDate: new Date(i.createdDate),
      comments: i.comments.map(c => ({ ...c, createdDate: new Date(c.createdDate) }))
    };
  })
}
