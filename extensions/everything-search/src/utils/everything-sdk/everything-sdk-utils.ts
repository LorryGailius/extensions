import { ErrorCode, SortType } from "./everything-sdk-constants";

/**
 * Convert Windows FILETIME to JavaScript Date
 * FILETIME is the number of 100-nanosecond intervals since January 1, 1601 (UTC)
 */
export function fileTimeToDate(fileTime: number): Date {
  return new Date(fileTime / 10000 - 11644473600000);
}

/**
 * Get human-readable error message from error code
 */
export function getErrorMessage(errorCode: ErrorCode): string {
  switch (errorCode) {
    case ErrorCode.OK:
      return "The operation completed successfully.";
    case ErrorCode.MEMORY:
      return "Failed to allocate memory for the search query.";
    case ErrorCode.IPC:
      return "Everything is not running.";
    case ErrorCode.REGISTERCLASSEX:
      return "Failed to register the search query window class.";
    case ErrorCode.CREATEWINDOW:
      return "Failed to create the search query window.";
    case ErrorCode.CREATETHREAD:
      return "Failed to create the search query thread.";
    case ErrorCode.INVALIDINDEX:
      return "Invalid index. The index must be greater or equal to 0 and less than the number of visible results.";
    case ErrorCode.INVALIDCALL:
      return "Invalid call.";
    default:
      return `Unknown error code: ${errorCode}`;
  }
}

/**
 * Map preference sort string to Everything SDK sort constant
 */
export function mapSortPreferenceToSDK(sortPreference: string): SortType {
  switch (sortPreference) {
    case "-sort name-ascending":
      return SortType.NAME_ASCENDING;
    case "-sort name-descending":
      return SortType.NAME_DESCENDING;
    case "-sort path-ascending":
      return SortType.PATH_ASCENDING;
    case "-sort path-descending":
      return SortType.PATH_DESCENDING;
    case "-sort size-ascending":
      return SortType.SIZE_ASCENDING;
    case "-sort size-descending":
      return SortType.SIZE_DESCENDING;
    case "-sort extension-ascending":
      return SortType.EXTENSION_ASCENDING;
    case "-sort extension-descending":
      return SortType.EXTENSION_DESCENDING;
    case "-sort date-created-ascending":
      return SortType.DATE_CREATED_ASCENDING;
    case "-sort date-created-descending":
      return SortType.DATE_CREATED_DESCENDING;
    case "-sort date-modified-ascending":
      return SortType.DATE_MODIFIED_ASCENDING;
    case "-sort date-modified-descending":
      return SortType.DATE_MODIFIED_DESCENDING;
    case "-sort date-accessed-ascending":
      return SortType.DATE_ACCESSED_ASCENDING;
    case "-sort date-accessed-descending":
      return SortType.DATE_ACCESSED_DESCENDING;
    case "-sort attributes-ascending":
      return SortType.ATTRIBUTES_ASCENDING;
    case "-sort attributes-descending":
      return SortType.ATTRIBUTES_DESCENDING;
    case "-sort file-list-file-name-ascending":
      return SortType.FILE_LIST_FILENAME_ASCENDING;
    case "-sort file-list-file-name-descending":
      return SortType.FILE_LIST_FILENAME_DESCENDING;
    case "-sort run-count-ascending":
      return SortType.RUN_COUNT_ASCENDING;
    case "-sort run-count-descending":
      return SortType.RUN_COUNT_DESCENDING;
    case "-sort date-recently-changed-ascending":
      return SortType.DATE_RECENTLY_CHANGED_ASCENDING;
    case "-sort date-recently-changed-descending":
      return SortType.DATE_RECENTLY_CHANGED_DESCENDING;
    case "-sort date-run-ascending":
      return SortType.DATE_RUN_ASCENDING;
    case "-sort date-run-descending":
      return SortType.DATE_RUN_DESCENDING;
    default:
      return SortType.NAME_ASCENDING;
  }
}
