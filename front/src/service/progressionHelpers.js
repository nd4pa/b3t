export default class ProgressionHelpers {
  static getStateName(state) {
    switch (state) {
      case "NOTSTARTED":
        return "Non commencé";
      case "INPROGRESS":
        return "En cours";
      case "FINISHED":
        return "En attente de validation";
      case "VALIDATED":
        return "Validé";
      case "REFUSED":
        return "Refusé";
      default:
        return "État inconnu";
    }
  }
}

export const VALID_STATES = [
  "NOTSTARTED",
  "INPROGRESS",
  "FINISHED",
  "VALIDATED",
  "REFUSED",
];