interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  const progress = Math.max(0, Math.min(100, (currentStep / totalSteps) * 100));

  return (
    <div className="w-full space-y-2" aria-label="Progresso do formulário">
      <div className="h-2 rounded-full overflow-hidden bg-slate-800/60">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-400">
        <span>Etapa {currentStep} de {totalSteps}</span>
        <span>{Math.round(progress)}%</span>
      </div>
    </div>
  );
};

export default FormProgress;