export type TExcuse = {
  text: string;
  weight: number;
};

export type TExcuseRecord = {
  [id: string]: TExcuse;
};

const createExcuseRecord = (tasks: TExcuse[]): TExcuseRecord =>
  tasks.reduce((acc, curr, index) => {
    return {
      ...acc,
      [index]: curr,
    };
  }, {});

const excuses: TExcuseRecord = createExcuseRecord([
  { text: "I need to attend my wife's cousin's pet's funeral.", weight: 1 },
  {
    text: "My pet rock has crippling anxiety and can't be left alone.",
    weight: 1,
  },
  { text: "I have no excuse I'll see you there.", weight: 1 },
  { text: "I broke my hand trying to catch a sandwich I dropped.", weight: 1 },
  { text: "My grandmother keeps trying to poison me.", weight: 1 },
  { text: "A fortune teller told me I'd have a heart attack if I left the house.", weight: 1 },
  { text: "I accidentally got onto a plane headed for Hawaii.", weight: 1 },
  { text: "Some prankster has glued all my windows and doors closed.", weight: 1 },
  { text: "Because I dropped my false teeth and I'm still trying to find a molar.", weight: 1 },
  { text: "Because the ozone in the air has flattened my tires.", weight: 1 },
  { text: "I won the lottery and need to blow it all before anyone finds out.", weight: 1 },
  { text: "I was bitten by a duck.", weight: 1 },
  { text: "I found a large spider and need to go to therapy.", weight: 1 },
  { text: "I am hung over.", weight: 1 },
  { text: "I wanted to sleep in.", weight: 1 },
  { text: "I woke up in a good mood and don't want to ruin it.", weight: 1 },
  { text: "I put a mint up my left nostril and am currently in the ER getting it removed.", weight: 1 },
  { text: "I'm still mad about what Disney did to Star Wards.", weight: 1 },
  { text: "I need to mow the lawn.", weight: 1 },
  { text: "A cow has broken into my car and I am waiting on the police.", weight: 1 },
  { text: "I honestly forgot that I work here.", weight: 1 },
  { text: "I couldn't decide what to wear.", weight: 1 },
  { text: "My house is being raided by the police.", weight: 1 },
  { text: "I forgot it wasn't the weekend still.", weight: 1 },
  { text: "I thought today was a public holiday.", weight: 1 },
  { text: "You said we were going to car pool and nobody picked me up.", weight: 1 },
  { text: "I ordered a pizza and I'll need to be home to pay for it.", weight: 1 },
]);

const randomIntInclusive = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getTotalWeightForRecord = (record: TExcuseRecord) =>
  Object.values(record).reduce(
    (acc: number, curr: any) => acc + curr.weight,
    0
  );

const findRandomEntry = (initialTarget: number, record: TExcuseRecord) => {
  let target = initialTarget;

  for (const id in record) {
    const entry = record[id];
    if (target <= entry.weight) return id;
    else target = target - entry.weight;
  }

  return null;
};

const getRandomEntryIdByWeight = (record: TExcuseRecord) =>
  findRandomEntry(
    randomIntInclusive(1, getTotalWeightForRecord(record)),
    record
  );

export const getExcuse = (): string => {
  const id = getRandomEntryIdByWeight(excuses);
  if (id === null) return "";
  return excuses[id].text;
};
