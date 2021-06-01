// Trang quản lý tài sản
class AssetPage {

    constructor(gridId){
        let me = this;

        // Lưu lại grid của trang
        me.grid = $(gridId);

        // Khởi tạo các sự kiện trên trang
        me.initEvents();
    }

    /**
     * Hàm khởi tạo các sự kiện
     * DVTUAN 31.05.2021
     */
    initEvents(){
        
    }     

    /**
     * Hàm dùng để render dữ liệu danh sách nhân viên
     * DVTUAN 31.05.2021
     */
    loadData(data){
        let me = this,
            table = $("<table></table>"),
            thead = me.renderHeader(),
            tbody = me.renderTbody(data);

        table.append(thead);
        table.append(tbody);

        me.grid.find("table").remove();
        me.grid.append(table);
    }

    /**
     * Hàm dùng để render header table
     * DVTUAN 31.05.2021
     */
    renderHeader(){
        let me = this,
            thead = $("<thead></thead>"),
            row = $("<tr></tr>");

        // Dyệt các cột để build header
        me.grid.find(".col").each(function(){
            let text = $(this).text(),
                th = $("<th></th>");

            th.text(text);
            row.append(th);
        });

        // Append row vào header
        thead.append(row);

        return thead;
    }

    /**
     * Hàm dùng để render ra tbody
     * @param {Hàm} data 
     * DVTUAN 31.05.2021
     */
    renderTbody(data){
        let me = this,
            tbody = $("<tbody></tbody>");

        if(data && data.length > 0){
            data.filter(function(item){
                let row = $("<tr></tr>");

                // Duyệt config từng cột
                me.grid.find(".col").each(function(){
                    let fieldName = $(this).attr("FieldName"),
                        dataType = $(this).attr("DataType"),
                        data = item[fieldName],
                        cell = $("<td></td>"),
                        className = me.getClassFormat(dataType),
                        value = me.getValue(data, dataType);

                    cell.text(value);
                    cell.addClass(className);
                    row.append(cell);
                });

                tbody.append(row);
            });
        }

        return tbody;
    }

    /**
     * Hàm lấy class format cho từng kiểu dữ liệu
     * DVTUAN 31.05.2021
     * @param {Hàm} dataType 
     */
    getClassFormat(dataType){
        let me = this,
            className = "";

        switch(dataType){
            case "number":
                className = "text-center";
                break;
        }

        return className;
    }

     /**
     * Hàm lấy dữ liệu chuẩn hóa
     * DVTUAN 31.05.2021
     * @param {Hàm} dataType 
     */
    getValue(data, dataType){
        let me = this;

        switch(dataType){
            case "number":
                data = formatMoney(data);
                break;
            case "Date":
                break;
            case "Enum":
                break;
        }

        return data;
    }
}

// Khởi tạo đối tượng trang nhân viên
let assetPage = new AssetPage("#gridAsset");

// Gọi hàm load dữ liệu grid
assetPage.loadData(assets);