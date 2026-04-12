"use client";
import React from 'react';
// 1. Importamos solo lo que el componente realmente utiliza
import { useContactForm } from '@/hooks/Form/useContactForm';
import { FormField, FormCheck } from '@/components/ui/FormField';

// El estado inicial se queda fuera para que sea una constante inmutable
const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
  newsletter: false
};

export const ContactForm = () => {
  // Extraemos todo del hook. Nota que 'enviarContacto' vive dentro de 'handleSubmit'
  const {
    form,
    loading,
    sent,
    error,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm(INITIAL_STATE);

  // Vista de éxito (Estado: Sent)
  if (sent) {
    return (
      <div className="text-center py-10 animate-fade-in bg-indigo-50/30 rounded-3xl border border-indigo-100">
        <div className="text-5xl mb-4">💌</div>
        <h2 className="psi-title-main text-xl mb-2">¡Mensaje recibido!</h2>
        <p className="psi-excerpt mb-6">
          Gracias <strong>{form.name}</strong>, he recibido tu consulta correctamente. Te responderé pronto.
        </p>
        <button 
          onClick={resetForm} 
          className="psi-btn-secondary"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Grupo de Nombre y Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Nombre" id="name">
          <input
            id="name"
            className="psi-input"
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </FormField>
        
        <FormField label="Email" id="email">
          <input
            id="email"
            className="psi-input"
            type="email"
            placeholder="correo@ejemplo.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </FormField>
      </div>

      {/* Asunto */}
      <FormField label="Asunto" id="subject">
        <input
          id="subject"
          className="psi-input"
          placeholder="¿En qué puedo ayudarte?"
          value={form.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
        />
      </FormField>

      {/* Mensaje */}
      <FormField label="Mensaje" id="message">
        <textarea
          id="message"
          className="psi-input resize-none"
          placeholder="Cuéntame tu duda o propuesta..."
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
        />
      </FormField>

      {/* Checkbox de Newsletter */}
      <FormCheck
        checked={form.newsletter}
        onChange={(e) => handleChange('newsletter', e.target.checked)}
      >
        <span className="text-xs text-slate-500">
          Acepto recibir artículos sobre razonamiento clínico y formación especializada.
        </span>
      </FormCheck>

      {/* Feedback de Error */}
      {error && (
        <div className="psi-form-error animate-shake">
          ⚠️ {error}
        </div>
      )}

      {/* Botón de envío con estado de carga */}
      <button
        type="submit"
        disabled={loading}
        className="psi-btn-primary w-full py-4 text-base flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="animate-spin text-lg">↻</span>
            Enviando...
          </>
        ) : (
          'Enviar mensaje →'
        )}
      </button>
    </form>
  );
};