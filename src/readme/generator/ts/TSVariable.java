package readme.generator.ts;

import java.util.HashMap;
import java.util.Map;

public class TSVariable extends TSBaseComponent {

    private String name;
    private String type;
    private String defaultValue;
    private String accessSpecifier;
    private String description;

    public TSVariable(){}

    public TSVariable(String name, String type){
        this.name = name;
        this.type = type;
    }

    public void setAccessSpecifier(String accessSpecifier) {
        this.accessSpecifier = accessSpecifier;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
    }

    public String getAccessSpecifier() {
        return accessSpecifier;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "TSVariable{" +
                "name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", defaultValue='" + defaultValue + '\'' +
                ", accessSpecifier='" + accessSpecifier + '\'' +
                ", description='" + description + '\'' +
                ", export=" + isExport() +
                '}';
    }

    @Override
    public Map toMap() {
        Map<String, String> map = new HashMap<>();
        map.put("Field", this.name);
        map.put("Type", this.type);
        map.put("Default", this.defaultValue);
        map.put("AccessSpecifier", this.accessSpecifier);
        map.put("Description", this.description);
        return map;
    }
}

