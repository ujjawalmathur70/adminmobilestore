export default function ConfirmDialog({ mobile, onConfirm, onCancel, busy }) {
  const name = mobile?.name ?? "this mobile";
  const brand = mobile?.brand ?? "this";

  const handleConfirm = () => {
    if (busy || !mobile) return;
    onConfirm?.();
  };

  return (
    <div className="overlay center" onClick={onCancel}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>Delete {name}?</h2>
        <p>This removes the {brand} {name} from your store. You can't undo this.</p>
        <div className="actions">
          <button type="button" className="btn ghost" onClick={onCancel} disabled={busy}>
            Keep it
          </button>
          <button type="button" className="btn danger solid" onClick={handleConfirm} disabled={busy}>
            {busy ? "Deleting…" : "Delete mobile"}
          </button>
        </div>
      </div>
    </div>
  );
}
