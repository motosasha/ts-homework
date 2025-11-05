enum Gender {
  Male = "male",
  Female = "female",
}

enum BloodGroup {
  "FirstPositive" = "O+",
  "FirstNegative" = "O-",
  "SecondPositive" = "A+",
  "SecondNegative" = "A-",
  "ThirdPositive" = "B+",
  "ThirdNegative" = "B-",
  "FourthPositive" = "AB+",
  "FourthNegative" = "AB-",
}

interface CryptoType {
  coin: string;
  wallet: string;
  network: string;
}

interface HairType {
  color: string;
  type: string;
}

interface AddressType {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
}

interface BankType {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface CompanyType {
  department: string;
  name: string;
  title: string;
  address: AddressType;
}

interface ResponceItemType {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: BloodGroup;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairType;
  ip: string;
  address: AddressType;
  macAddress: string;
  university: string;
  bank: BankType;
  company: CompanyType;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: CryptoType;
  role: string;
}

interface ResponceType {
  users: ResponceItemType[];
}

async function fetchUsers(): Promise<any> {
  const url: string = "https://dummyjson.com/users";
  const response: Response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return await response.json();
}

(async () => {
  try {
    const data: ResponceType = await fetchUsers();
    console.log(data);
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
})();
