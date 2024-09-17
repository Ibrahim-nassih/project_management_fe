import { Injectable } from '@angular/core'
import * as CryptoJS from 'crypto-js'

@Injectable({
    providedIn: 'root',
})
export class EncryptDecryptService {
    private readonly encryption_keys: string =
        'slN8y86ufz6ssxvr6ldXMnSsbHY2lQzGXC926GbW53lcojPb4uJTtYhTfeHxgxml'

    set(value: string) {
        const key = CryptoJS.enc.Utf8.parse(this.encryption_keys)
        const iv = CryptoJS.enc.Utf8.parse(this.encryption_keys)
        const encrypted = CryptoJS.AES.encrypt(
            CryptoJS.enc.Utf8.parse(value.toString()),
            key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            },
        )

        return encrypted.toString()
    }

    get(value: any) {
        const key = CryptoJS.enc.Utf8.parse(this.encryption_keys)
        const iv = CryptoJS.enc.Utf8.parse(this.encryption_keys)
        const decrypted = CryptoJS.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        })
        return decrypted.toString(CryptoJS.enc.Utf8)
    }
}
