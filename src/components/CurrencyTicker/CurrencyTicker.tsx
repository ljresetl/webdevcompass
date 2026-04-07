"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./CurrencyTicker.module.scss";
import { FaDollarSign, FaEuroSign, FaPoundSign } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { SiPolkadot } from "react-icons/si";

interface CurrencyRate {
  code: string;
  rateCZKPerUnit: number;
}

const CurrencyTicker: React.FC = () => {
  const [rates, setRates] = useState<CurrencyRate[]>([]);

  const currencyIcon = (code: string) => {
    switch (code) {
      case "EUR": return <FaEuroSign size={20} color="#2563eb" />;
      case "USD": return <FaDollarSign size={20} color="#16a34a" />;
      case "UAH": return <GiMoneyStack size={20} color="#f59e0b" />;
      case "GBP": return <FaPoundSign size={20} color="#9333ea" />;
      case "PLN": return <SiPolkadot size={20} color="#ef4444" />;
      default: return <FaDollarSign size={20} color="#64748b" />;
    }
  };

  const getRates = useCallback(async () => {
    try {
      const frankfurterUrl = "https://api.frankfurter.app/latest?from=CZK&to=EUR,USD,GBP,PLN";
      // Використовуємо API НБУ для отримання актуального курсу гривні
      const nbuUrl = "https://bank.gov.ua/NBUStatService/v1/statistichny/exchange?valcode=CZK&json";

      // Використовуємо allSettled, щоб помилка одного API не зупиняла інше
      const results = await Promise.allSettled([
        axios.get(frankfurterUrl),
        axios.get(nbuUrl),
      ]);

      const data: CurrencyRate[] = [];

      // 1. Обробка даних від Frankfurter (EUR, USD, GBP, PLN)
      if (results[0].status === "fulfilled") {
        const ratesData = results[0].value.data?.rates;
        if (ratesData) {
          for (const [code, rate] of Object.entries(ratesData)) {
            data.push({ code, rateCZKPerUnit: 1 / (rate as number) });
          }
        }
      }

      // 2. Обробка даних від НБУ (UAH)
      if (results[1].status === "fulfilled") {
        const nbuData = results[1].value.data;
        // НБУ повертає курс: скільки гривень за 1 крону. Нам треба навпаки.
        if (nbuData && nbuData[0]) {
          const czkInUah = nbuData[0].rate;
          data.push({ code: "UAH", rateCZKPerUnit: 1 / czkInUah });
        }
      }

      if (data.length === 0) throw new Error("No data received");

      const order = ["EUR", "USD", "UAH", "GBP", "PLN"];
      data.sort((a, b) => order.indexOf(a.code) - order.indexOf(b.code));

      setRates(data);
    } catch (error) {
      console.error("Помилка завантаження курсів:", error);
      setRates([{ code: "ERR", rateCZKPerUnit: 0 }]);
    }
  }, []);

  useEffect(() => {
    getRates();
  }, [getRates]);

  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          <span className={styles.cityLabel}>
            Exchange Rates (CZK per 1 unit)
          </span>

          {rates.map((r, idx) => (
            <span key={idx} className={styles.dayChip}>
              {currencyIcon(r.code)}
              <span className={styles.dayText}>
                {r.code === "ERR"
                  ? "Error loading rates"
                  : `1 ${r.code} = ${r.rateCZKPerUnit.toFixed(
                      r.code === "UAH" || r.code === "PLN" ? 3 : 2
                    )} CZK`}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyTicker;