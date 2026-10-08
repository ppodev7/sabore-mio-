export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  /** Casas decimais ao exibir (ex.: nota 4.9). */
  decimals?: number;
}

export const stats: Stat[] = [
  { id: 'anos', value: 40, suffix: '+', label: 'anos de forno a lenha' },
  { id: 'fermentacao', value: 48, suffix: 'h', label: 'de fermentação natural' },
  { id: 'temperatura', value: 450, suffix: '°C', label: 'na boca do forno' },
  { id: 'nota', value: 49, suffix: '', label: 'de avaliação média', decimals: 1 },
];
