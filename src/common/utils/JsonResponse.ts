export class JsonResponse {
  private success: boolean = false;
  private error: string | null = null;
  private data: any;

  public setSuccess() {
    this.success = true;
    this.data = null;
    this.error = null;
  }

  public setError() {
    this.success = false;
    this.data = null;
    this.error = null;
  }

  public setData(data: any) {
    this.success = true;
    this.data = data;
    this.error = null;
  }

  public setErrorMessage(error: any) {
    this.success = false;
    this.data = null;
    this.error = error;
  }

  public getResult() {
    return {
      success: this.success,
      data: this.data,
      error: this.error,
    };
  }
}
