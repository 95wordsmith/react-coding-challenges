import { useState } from "react";

type FeedTuple = [string, string];
interface ConditionsObject {
  name: string;
  state: boolean;
}

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  let feedMap: FeedTuple[] = [
    ["Include Uppercase Letters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["Include Lowercase Letters", "abcdefghijklmnopqrstuvwxyz"],
    ["Include Numbers", "1234567890"],
    ["Include Symbols", "!@#$%^&*"],
  ];

  let map = new Map<string, string>(feedMap);
  const generatePassword = (length: number, conditions: ConditionsObject[]) => {
    let options: string[] = [];
    conditions?.forEach((arg) => {
      if (arg.state) {
        options.push(arg.name);
      }
    });

    let characSet = "";
    let newPassword = "";

    map?.forEach((value, key) => {
      if (options?.includes(key)) {
        characSet += value;
      } else {
        characSet += "";
      }
    });
    if (characSet) {
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characSet.length);
        newPassword += characSet[randomIndex];
      }

      setPassword(newPassword);
    }
  };
  return { password, generatePassword, copyPassword };
};

export default usePasswordGenerator;
