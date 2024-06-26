import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
    BaseEntity,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';

import { TaiKhoan } from './TaiKhoan.entity';
import { Chat } from './Chat.entity';
import { DonHang } from './DonHang.entity';
import { ChiTietMaGiamGia } from './ChiTietMaGiamGia.entity';
import { ViNguoiDung } from './ViNguoiDung.entity';
import { TaiKhoanEntity } from './index.entity';

@Entity('NguoiBanHang')
export class NguoiBanHang extends BaseEntity {
    @PrimaryColumn({
        type: 'int',
    })
    // @OneToOne(() => TaiKhoan)
    // @JoinColumn()
    MaNguoiBanHang: number;

    @Column({
        type: 'nvarchar',
        length: 50,
    })
    HoDem: string;

    @Column({
        type: 'nvarchar',
        length: 50,
    })
    Ten: string;

    @Column({
        type: 'nvarchar',
        length: 20,
        unique: true,
    })
    SDT: string;

    @Column({
        type: 'date',
    })
    NgayThangNamSInh: Date;

    @Column({
        type: 'nvarchar',
        length: 250,
    })
    DiaChi: string;

    @OneToMany(() => Chat, (chat) => chat.nguoiBanHang)
    chats: Chat[];

    @OneToMany(() => DonHang, (donHang) => donHang.nguoiBanHang)
    donHang: DonHang[];

    @OneToMany(() => ChiTietMaGiamGia, (chiTietMaGiamGia) => chiTietMaGiamGia.nguoiBanHang)
    chiTietMaGiamGia: ChiTietMaGiamGia[];

    @OneToOne(() => ViNguoiDung)
    viNguoiDung: ViNguoiDung;
}
